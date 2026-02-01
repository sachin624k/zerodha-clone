import React from 'react';

function Footer() {

  const bottomParaStyle = {
    fontSize: "9px",
    marginLeft: "75px",
    marginRight: "60px"
  };

  const linkHighlight = {
    fontSize: "10px",
    fontWeight: "500",
    color: "#387ed1"
  };

  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="container p-3 border-top mt-5">

        {/* TOP SECTION */}
        <div className="row p-5">
          <div className="col-4 p-1">
            <img
              src="media/images/logo.svg"
              style={{ width: "45%", marginLeft: "80px", marginBottom: "15px" }}
              alt="Logo"
            />

            <p className='text-muted mt-2' style={{ fontSize: "12px", marginLeft: "80px" }}>
              &copy; 2010 - 2025, Zerodha Broking Ltd.<br />
              All rights reserved.
            </p>
          </div>

          <div
            className="col-8 p-1"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "16px",
              alignItems: "flex-start",
              minWidth: 0
            }}
          >
            {/* Account */}
            <div style={{ width: "100%" }}>
              <p style={{ fontSize: "17px", fontWeight: 600, color: "#424242", marginBottom: "16px" }}>
                Account
              </p>
              {[
                "Open demat account", "Minor demat account", "NRI demat account",
                "Commodity", "Dematerialisation", "Fund transfer", "MTF", "Referral program"
              ].map(item => (
                <a
                  key={item}
                  href=""
                  style={{
                    display: "block",
                    fontSize: "14px",
                    color: "#666666",
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
              <p style={{ fontSize: "17px", fontWeight: 600, color: "#424242", marginBottom: "16px" }}>
                Support
              </p>
              {[
                "Contact Us", "Support portal", "How to file a complaint?",
                "Status of your complaints", "Bulletin", "Circular", "Z-Connect blog", "Downloads"
              ].map(item => (
                <a
                  key={item}
                  href=""
                  style={{
                    display: "block",
                    fontSize: "14px",
                    color: "#666666",
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
              <p style={{ fontSize: "17px", fontWeight: 600, color: "#424242", marginBottom: "16px" }}>
                Company
              </p>
              {[
                "About", "Philosophy", "Press & media", "Careers",
                "Zerodha Cares (CSR)", "Zerodha.tech", "Open source"
              ].map(item => (
                <a
                  key={item}
                  href=""
                  style={{
                    display: "block",
                    fontSize: "14px",
                    color: "#666666",
                    textDecoration: "none",
                    marginBottom: "12px"
                  }}
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Quick Links */}
            <div>
              <p style={{ fontSize: "17px", fontWeight: 600, color: "#424242", marginBottom: "16px" }}>
                Quick links
              </p>
              {[
                "Upcoming IPOs", "Brokerage charges", "Market holidays",
                "Economic calendar", "Calculators", "Markets", "Sectors"
              ].map(item => (
                <a
                  key={item}
                  href=""
                  style={{
                    display: "block",
                    fontSize: "14px",
                    color: "#666666",
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

        {/* BOTTOM DESCRIPTION */}
        <div className="row p-5 pt-0 text-muted" style={{ fontSize: "12px", lineHeight: "18px", color: "#9b9b9b" }}>
          <div className="col-12">

            <p style={bottomParaStyle}>
              Zerodha Broking Ltd.: Member of NSE, BSE & MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to <span style={linkHighlight}>complaints@zerodha.com</span>, for DP related to <span style={linkHighlight}>dp@zerodha.com</span>. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
            </p>

            <p style={bottomParaStyle}>
              Procedure to file a complaint on <span style={linkHighlight}>SEBI</span>: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances
            </p>

            <p style={{ ...bottomParaStyle, ...linkHighlight }}>
              Smart Online Dispute Resolution | Grievances Redressal Mechanism
            </p>

            <p style={bottomParaStyle}>
              Investments in securities market are subject to market risks; read all the related documents carefully before investing.
            </p>

            <p style={bottomParaStyle}>
              Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
            </p>

            <p style={bottomParaStyle}>
              India's largest broker based on networth as per NSE. <span style={linkHighlight}>NSE broker factsheet</span>
            </p>

            <p style={bottomParaStyle}>
              "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary... If you find anyone claiming to be part of Zerodha and offering such services, <span style={linkHighlight}>please create a ticket here</span>.
            </p>

            <p style={bottomParaStyle}>
              *Customers availing insurance advisory services offered by Ditto (Tacterial Consulting Private Limited | IRDAI Registered Corporate Agent (Composite) License No CA0738) will not have access to the exchange investor grievance redressal forum, SEBI SCORES/ODR, or arbitration mechanism for such products.
            </p>

          </div>
        </div>

        {/* FOOTER SHORT LINKS ROW */}
        <div className="row w-100 py-4" style={{ marginTop: "-60px"}}>
          <div className="col-12 text-mutated d-flex justify-content-center" style={{ gap: "22px" }}>
            {[
              "NSE",
              "BSE",
              "MCX",
              "Terms & conditions",
              "Policies & procedures",
              "Privacy policy",
              "Disclosure",
              "For investor's attention",
              "Investor charter"
            ].map((item, index) => (
              <a
                key={index}
                href="#"
                style={{
                  fontSize: "12px",
                  color: "#9b9b9b",
                  textDecoration: "none",
                  whiteSpace: "nowrap"
                }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>


      </div>
    </footer>
  );
}

export default Footer;
