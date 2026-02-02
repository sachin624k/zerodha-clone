import React from "react";
import { Link } from "react-router-dom";

const Funds = () => {
  return (
    <div className="funds-view">
      <div className="funds-header">
        <div className="promo-text">
          <span className="upi-tag">UPI</span>
          <p>Instant, zero-cost fund transfers with UPI</p>
        </div>
        <div className="funds-actions">
          <Link className="btn-action btn-add">Add funds</Link>
          <Link className="btn-action btn-withdraw">Withdraw</Link>
        </div>
      </div>

      <div className="funds-grid">
        <div className="funds-col">
          <h3 className="section-type">Equity</h3>
          
          <div className="summary-card">
            <div className="stat-block">
              <span className="label">Available margin</span>
              <h1 className="val primary-blue">4,043.10</h1>
            </div>
            <div className="stat-block">
              <span className="label">Used margin</span>
              <h1 className="val">3,757.30</h1>
            </div>
            <div className="stat-block">
              <span className="label">Available cash</span>
              <h1 className="val">4,043.10</h1>
            </div>
          </div>

          <div className="details-list">
            <div className="list-item"><span>Opening Balance</span><span>4,043.10</span></div>
            <div className="list-item"><span>Payin</span><span>4,064.00</span></div>
            <div className="list-item"><span>Payout</span><span>0.00</span></div>
            <div className="list-item"><span>SPAN</span><span>0.00</span></div>
            <div className="list-item"><span>Exposure</span><span>0.00</span></div>
            <div className="list-item"><span>Options premium</span><span>0.00</span></div>
            <div className="border-line"></div>
            <div className="list-item"><span>Collateral (Liquid funds)</span><span>0.00</span></div>
            <div className="list-item"><span>Collateral (Equity)</span><span>0.00</span></div>
            <div className="list-item bold"><span>Total Collateral</span><span>0.00</span></div>
          </div>
        </div>

        <div className="funds-col">
          <h3 className="section-type">Commodity</h3>
          <div className="commodity-empty">
            <div className="empty-box">
               <p>You don't have a commodity account</p>
               <Link className="btn-outline">Open Account</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Funds;