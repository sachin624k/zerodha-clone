import React, { useState, useEffect } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);
  const [newOrders, setNewOrders] = useState([]);

  useEffect(() => {
    /* OLD HOLDINGS */
    axios.get("http://localhost:3002/allHoldings")
      .then((res) => setAllHoldings(res.data));

    /* NET NEW PURCHASES (BUY - SELL) */
    axios.get("http://localhost:3002/allOrders")
      .then((res) => {
        const netMap = {};

        res.data.forEach(order => {
          if (!netMap[order.name]) {
            netMap[order.name] = 0;
          }

          if (order.mode === "BUY") {
            netMap[order.name] += order.qty;
          } else {
            netMap[order.name] -= order.qty;
          }
        });

        const netPurchases = Object.entries(netMap)
          .filter(([_, qty]) => qty > 0)
          .map(([name, qty]) => ({
            name,
            qty
          }));

        setNewOrders(netPurchases);
      });
  }, []);

  /* GRAPH */
  const labels = allHoldings.map((stock) => stock.name);
  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <>
      {/* HOLDINGS */}
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty</th>
              <th>Avg</th>
              <th>LTP</th>
            </tr>
          </thead>
          <tbody>
            {allHoldings.map((stock, index) => (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* NEW PURCHASES */}
      <h3 className="title" style={{ marginTop: "40px" }}>
        New Purchases ({newOrders.length})
      </h3>

      {newOrders.length === 0 ? (
        <p>No new purchases today</p>
      ) : (
        <div className="order-table">
          <table>
            <thead>
              <tr>
                <th>Instrument</th>
                <th>Net Qty</th>
              </tr>
            </thead>
            <tbody>
              {newOrders.map((order, index) => (
                <tr key={index}>
                  <td>{order.name}</td>
                  <td>{order.qty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <VerticalGraph data={data} />
    </>
  );
};

export default Holdings;
