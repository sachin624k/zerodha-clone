import React, { useState } from "react";

function CreateTicket() {
  const [active, setActive] = useState(null);

  const categories = [
    { name: "Account Opening", icon: <i class="fa fa-plus-circle fa-lg" aria-hidden="true"></i> },
    { name: "Your Zerodha Account", icon: <i class="fa fa-user" aria-hidden="true"></i> },
    { name: "Kite", icon: <i class="fa fa-paper-plane-o" aria-hidden="true"></i> },
    { name: "Funds", icon: <i class="fa fa-inr" aria-hidden="true"></i> },
    { name: "Console", icon: <i class="fa fa-circle-o-notch" aria-hidden="true"></i> },
    { name: "Coin", icon: <i class="fa fa-eercast" aria-hidden="true"></i> }
  ];

  const faqData = {
    "Account Opening": [
      "How do I open my account?",
      "What documents are required?",
      "How long does it take to activate?"
    ],
    "Your Zerodha Account": [
      "How to change mobile number?",
      "How to reset password?"
    ],
    "Kite": [
      "How to place orders?",
      "Why order failed?"
    ],
    "Funds": [
      "How to add funds?",
      "Withdrawal timing?"
    ],
    "Console": [
      "Where to check P&L?",
      "How to download statements?"
    ],
    "Coin": [
      "What are AMC charges?",
      "How to redeem mutual funds?"
    ],
  };

  const toggle = (name) => {
    setActive(active === name ? null : name);
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      maxWidth: "1200px",
      margin: "40px auto",
      gap: "30px"
    }}>

      {/* LEFT SECTION */}
      <div style={{ width: "65%" }}>

        {categories.map((item, index) => (
          <div key={index}>

            {/* Category Header */}
            <div
              onClick={() => toggle(item.name)}
              style={{
                border: "1px solid #e6e6e6",
                padding: "18px 20px",
                borderRadius: "6px",
                marginBottom: active === item.name ? "5px" : "12px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#fff",
                cursor: "pointer",
                fontSize: "16px"
              }}
            >
              <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                {item.icon} {item.name}
              </span>

              <span style={{ fontSize: "18px", opacity: 0.7 }}>
                {active === item.name ? "▲" : "▼"}
              </span>
            </div>

            {/* Expanded FAQ Items */}
            {active === item.name && (
              <div style={{
                border: "1px solid #e6e6e6",
                borderRadius: "6px",
                padding: "15px 20px",
                marginBottom: "15px",
                backgroundColor: "#fafafa"
              }}>
                <ul style={{ margin: 0, paddingLeft: "20px", lineHeight: "26px" }}>
                  {faqData[item.name]?.map((faq, i) => (
                    <li key={i} style={{ marginBottom: "4px" }}>{faq}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}

      </div>

      {/* RIGHT SECTION (Notices + Quick links) */}
      <div style={{ width: "30%" }}>

        <div style={{
          backgroundColor: "#fff6e5",
          padding: "15px",
          borderLeft: "4px solid orange",
          marginBottom: "20px",
          borderRadius: "4px"
        }}>
          <ul style={{ margin: 0, paddingLeft: "18px", lineHeight: "23px" }}>
            <li>Additional exposure margin on securities under MWPL</li>
            <li>Adjustment of F&O contracts of WIPRO due to dividend</li>
          </ul>
        </div>

        <div style={{
          backgroundColor: "#f8f8f8",
          padding: "15px",
          borderRadius: "4px"
        }}>
          <h4 style={{ marginBottom: "10px" }}>Quick links</h4>
          <ul style={{ margin: 0, paddingLeft: "18px", lineHeight: "26px" }}>
            <li>Track account opening</li>
            <li>Track segment activation</li>
            <li>Intraday margins</li>
            <li>Kite user manual</li>
            <li>Learn how to create a ticket</li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default CreateTicket;
