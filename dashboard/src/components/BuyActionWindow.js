import React, { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid, mode = "BUY" }) => {
  const { closeBuyWindow } = useContext(GeneralContext);

  const [qty, setQty] = useState(1);
  const [price, setPrice] = useState("");

  const handleSubmit = async () => {
    if (qty <= 0) {
      alert("Quantity must be greater than 0");
      return;
    }

    if (!price || price <= 0) {
      alert("Enter a valid price");
      return;
    }

    try {
      await axios.post("http://localhost:3002/newOrder", {
        name: uid,
        qty: Number(qty),
        price: Number(price),
        mode,
      });

      closeBuyWindow();
    } catch (err) {
      console.error("ORDER ERROR 👉", err);
      alert(err.response?.data || "Order failed");
    }
  };

  return (
    <div className="buy-window-overlay">
      <div className="buy-window">
        {/* HEADER */}
        <div className={`buy-header ${mode === "SELL" ? "sell" : "buy"}`}>
          {uid} {mode}
        </div>

        {/* BODY */}
        <div className="buy-body">
          <div className="field">
            <label>Quantity</label>
            <input
              type="number"
              min="1"
              value={qty}
              onChange={(e) => setQty(e.target.value)}
            />
          </div>

          <div className="field">
            <label>Price</label>
            <input
              type="number"
              min="1"
              placeholder="Enter price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <p className="margin">Margin required ₹140.65</p>
        </div>

        {/* FOOTER */}
        <div className="buy-footer">
          <button
            className={`action-btn ${mode === "SELL" ? "sell" : "buy"}`}
            onClick={handleSubmit}
          >
            {mode}
          </button>

          <button className="action-btn cancel" onClick={closeBuyWindow}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
