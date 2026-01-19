import React from 'react';

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="container p-3 border-top mt-5">

        {/* MAIN 5/7 SPLIT */}
        <div className="row p-5">

          {/* LEFT SIDE (col-5) */}
          <div className="col-4 p-1">
            <img src="media/images/logo.svg" style={{ width: "40%", marginLeft: "90px" }} alt="Logo" />

            <p className='text-muted mt-2' style={{ fontSize: "11px", marginLeft: "90px" }}>
              &copy; 2010 - 2025, Zerodha Broking Ltd.<br />
              All rights reserved.
            </p>
          </div>

          {/* RIGHT SIDE (col-7) */}
          <div className="col-8 p-1"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",   // exact equal 4 columns
              gap: "16px",
              alignItems: "flex-start",
              minWidth: 0
            }}
          >

            {/* Account */}
            <div style={{ width: "100%" }}>
              <p style={{ fontSize: "15px", fontWeight: 500, color: "#424242", marginBottom: "16px" }}>
                Account
              </p>
              {[
                "Open demat account", "Minor demat account", "NRI demat account",
                "Commodity", "Dematerialisation", "Fund transfer", "MTF", "Referral program"
              ].map(item => (
                <a key={item}
                  href=""
                  style={{
                    display: "block",
                    fontSize: "12px",
                    color: "#424242",
                    textDecoration: "none",
                    marginBottom: "12px"
                  }}
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Support */}
            <div>
              <p style={{ fontSize: "15px", fontWeight: 500, color: "#424242", marginBottom: "16px" }}>
                Support
              </p>
              {[
                "Contact Us", "Support portal", "How to file a complaint?",
                "Status of your complaints", "Bulletin", "Circular", "Z-Connect blog", "Downloads"
              ].map(item => (
                <a key={item}
                  href=""
                  style={{
                    display: "block",
                    fontSize: "12px",
                    color: "#424242",
                    textDecoration: "none",
                    marginBottom: "12px"
                  }}
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Company */}
            <div>
              <p style={{ fontSize: "15px", fontWeight: 500, color: "#424242", marginBottom: "16px" }}>
                Company
              </p>
              {[
                "About", "Philosophy", "Press & media", "Careers",
                "Zerodha Cares (CSR)", "Zerodha.tech", "Open source"
              ].map(item => (
                <a key={item}
                  href=""
                  style={{
                    display: "block",
                    fontSize: "12px",
                    color: "#424242",
                    textDecoration: "none",
                    marginBottom: "12px"
                  }}
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Quick links */}
            <div>
              <p style={{ fontSize: "15px", fontWeight: 500, color: "#424242", marginBottom: "16px" }}>
                Quick links
              </p>
              {[
                "Upcoming IPOs", "Brokerage charges", "Market holidays",
                "Economic calendar", "Calculators", "Markets", "Sectors"
              ].map(item => (
                <a key={item}
                  href=""
                  style={{
                    display: "block",
                    fontSize: "12px",
                    color: "#424242",
                    textDecoration: "none",
                    marginBottom: "12px"
                  }}
                >
                  {item}
                </a>
              ))}
            </div>

          </div>
        </div>

        {/* BOTTOM DESCRIPTION (same left/right boundary) */}
        <div className="row p-5 pt-0 text-muted" style={{ fontSize: "12px", lineHeight: "18px" }}>
          <div className="col-12">
            <p>Zerodha Broking Ltd.: Member of NSE, BSE & MCX – SEBI Registration no.: INZ000031633...</p>
            <p>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal...</p>
            <p>"Prevent unauthorised transactions in your account. Update your mobile numbers..."</p>
            <p>*Customers availing insurance advisory services offered by Ditto...</p>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
