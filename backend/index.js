require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");

const { HoldingsModel } = require('./model/HoldingsModel');
const { PositionsModel } = require('./model/PositionsModel');
const { OrdersModel } = require('./model/OrdersModel');

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

app.set("trust proxy", 1); 

app.use(cors({
  origin: [
    "https://zerodha-clone-theta-orpin.vercel.app",
    "https://zerodha-dashboard-psi.vercel.app",
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization"],
}));

app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());

// Routes
app.use("/auth", authRoute);

app.get("/allHoldings", async (req, res) => {
  const holdings = await HoldingsModel.find({});
  const aggregated = {};
  holdings.forEach((h) => {
    if (!aggregated[h.name]) {
      aggregated[h.name] = {
        name: h.name,
        qty: h.qty,
        avg: h.avg,
        price: h.price,
        net: h.net,
        day: h.day,
      };
    } else {
      const existing = aggregated[h.name];
      const totalQty = existing.qty + h.qty;
      const weightedAvg = (existing.avg * existing.qty + h.avg * h.qty) / totalQty;
      existing.qty = totalQty;
      existing.avg = Number(weightedAvg.toFixed(2));
      existing.price = h.price;
    }
  });
  res.json(Object.values(aggregated));
});

app.get('/allPositions', async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.get("/allOrders", async (req, res) => {
  let allOrders = await OrdersModel.find({});
  res.json(allOrders);
});

app.post("/newOrder", async (req, res) => {
  const { name, qty, price, mode } = req.body;
  if (!name || qty <= 0 || price <= 0) {
    return res.status(400).send("Invalid qty or price");
  }
  try {
    await OrdersModel.create({ name, qty, price, mode });
    const holding = await HoldingsModel.findOne({ name });

    if (mode === "BUY") {
      if (holding) {
        const totalQty = holding.qty + qty;
        const newAvg = (holding.avg * holding.qty + price * qty) / totalQty;
        holding.qty = totalQty;
        holding.avg = Number(newAvg.toFixed(2));
        holding.price = price;
        const netPct = ((price - holding.avg) / holding.avg) * 100;
        holding.net = `${netPct.toFixed(2)}%`;
        holding.day = "0.00%";
        await holding.save();
      } else {
        await HoldingsModel.create({ name, qty, avg: price, price, net: "0.00%", day: "0.00%" });
      }
    }

    if (mode === "SELL") {
      if (!holding || holding.qty < qty) return res.status(400).send("Not enough quantity");
      holding.qty -= qty;
      holding.price = price;
      if (holding.qty === 0) {
        await HoldingsModel.deleteOne({ name });
      } else {
        const netPct = ((price - holding.avg) / holding.avg) * 100;
        holding.net = `${netPct.toFixed(2)}%`;
        holding.day = "0.00%";
        await holding.save();
      }
    }
    res.status(200).send("Order executed successfully");
  } catch (err) {
    res.status(500).send("Order failed");
  }
});

mongoose.connect(uri)
  .then(() => {
    console.log("DB connected!");
    app.listen(PORT, () => console.log(`App started on port ${PORT}`));
  })
  .catch((err) => console.error("DB connection failed:", err.message));