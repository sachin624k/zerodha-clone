import React, { useState, useEffect } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);
  const [newOrders, setNewOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/allHoldings").then((res) => setAllHoldings(res.data));

    axios.get("http://localhost:3002/allOrders").then((res) => {
      const netMap = {};
      res.data.forEach((order) => {
        if (!netMap[order.name]) netMap[order.name] = 0;
        order.mode === "BUY" ? (netMap[order.name] += order.qty) : (netMap[order.name] -= order.qty);
      });
      const netPurchases = Object.entries(netMap)
        .filter(([_, qty]) => qty > 0)
        .map(([name, qty]) => ({ name, qty }));
      setNewOrders(netPurchases);
    });
  }, []);

  const stockColors = ["#7eb0d5", "#b2e061", "#bd7ebe", "#ffb55a", "#ffee65", "#beb9db", "#fdcce5", "#8bd3c7"];
  const data = {
    labels: allHoldings.map((s) => s.name),
    datasets: [{
      label: "Stock Value",
      data: allHoldings.map((s) => s.price * s.qty),
      backgroundColor: allHoldings.map((_, i) => stockColors[i % stockColors.length]),
      borderRadius: 4,
    }],
  };

  return (
    <div className="holdings-container">
      <header className="holdings-header">
        <h3 className="section-title">Holdings ({allHoldings.length})</h3>
      </header>

      <div className="table-responsive">
        <table className="kite-table">
          <thead>
            <tr>
              <th className="text-left">Instrument</th>
              <th className="text-right">Qty.</th>
              <th className="text-right">Avg.</th>
              <th className="text-right">LTP</th>
              <th className="text-right">P&L</th>
            </tr>
          </thead>
          <tbody>
            {allHoldings.map((stock, index) => {
              const pnl = (stock.price - stock.avg) * stock.qty;
              return (
                <tr key={index} className="table-row">
                  <td className="text-left instrument-name">{stock.name}</td>
                  <td className="text-right">{stock.qty}</td>
                  <td className="text-right">{stock.avg.toLocaleString(undefined, {minimumFractionDigits: 2})}</td>
                  <td className="text-right">{stock.price.toLocaleString(undefined, {minimumFractionDigits: 2})}</td>
                  <td className={`text-right ${pnl >= 0 ? "text-green" : "text-red"}`}>
                    {pnl >= 0 ? "+" : ""}{pnl.toFixed(2)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {newOrders.length > 0 && (
        <section className="new-purchases-section">
          <h3 className="section-title small">New Purchases</h3>
          <div className="purchase-grid">
            {newOrders.map((order, index) => (
              <div key={index} className="purchase-card">
                <span className="p-name">{order.name}</span>
                <span className="p-qty">+{order.qty} Shares</span>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="graph-section">
        <h3 className="section-title small">Portfolio Visualizer</h3>
        <div className="graph-wrapper">
          <VerticalGraph data={data} />
        </div>
      </section>
    </div>
  );
};

export default Holdings;