import React, { useEffect, useState } from "react";
import api from "../api";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    api.get("/allOrders")
      .then((res) => {
        setOrders(res.data);
      });
  }, []);

  if (orders.length === 0) {
    return (
      <div className="orders-container no-orders">
        <div className="empty-state">
          <img src="/no-orders.svg" alt="No orders" style={{ width: '100px', opacity: 0.5 }} />
          <p>You haven't placed any orders yet</p>
          <button className="btn-blue" onClick={() => window.location.href='/'}>Get started</button>
        </div>
      </div>
    );
  }

  return (
    <div className="orders-container">
      <div className="orders-header">
        <h3 className="title">Orders ({orders.length})</h3>
      </div>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th className="align-left">Instrument</th>
              <th>Qty.</th>
              <th>Avg. price</th>
              <th>Status</th>
              <th className="align-right">Type</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order, index) => (
              <tr key={index} className="order-row">
                <td className="instrument align-left">{order.name}</td>
                <td className="qty">{order.qty}</td>
                <td className="price">{order.price.toFixed(2)}</td>
                <td className="status"><span className="badge-complete">COMPLETE</span></td>
                <td className="align-right">
                  <span className={order.mode === "BUY" ? "type-buy" : "type-sell"}>
                    {order.mode}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;