import React from 'react';

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="container p-3 border-top mt-5">
        <div className="row p-5">
          <div className="col-4 p-1">
            <img src="media/images/logo.svg" style={{ width: "40%", marginLeft: "80px" }} alt="Logo" />

            <p className='text-muted mt-2' style={{ fontSize: "11px", marginLeft: "90px" }}>
              &copy; 2010 - 2025, Zerodha Broking Ltd.<br />
              All rights reserved.
            </p>
          </div>
          <div className="col-8 p-1"
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

        {/* BOTTOM DESCRIPTION */}
        <div
          className="row p-5 pt-0 text-muted"
          style={{
            fontSize: "12px",
            lineHeight: "18px",
            maxWidth: "1000px",
            margin: "0 auto"
          }}
        >
          <div className="col-12">
            <p style={{fontSize: "9px"}}>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to <span style={{ fontSize: "10px", fontWeight: "500" ,color: "#387ed1"}}>complaints@zerodha.com</span>, for DP related to <span style={{ fontSize: "10px", fontWeight: "500" ,color: "#387ed1"}}>dp@zerodha.com.</span> Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>
            <p style={{fontSize: "9px"}}>Procedure to file a complaint on <span style={{ fontSize: "10px", fontWeight: "500" ,color: "#387ed1"}}>SEBI </span>: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>
            <p style={{ fontSize: "10px", fontWeight: "500" ,color: "#387ed1"}}>Smart Online Dispute Resolution | Grievances Redressal Mechanism</p>
            <p style={{fontSize: "9px"}}>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
            <p style={{fontSize: "9px"}}>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>
            <p style={{fontSize: "9px"}}>India's largest broker based on networth as per NSE. <span style={{ fontSize: "10px", fontWeight: "500" ,color: "#387ed1"}}>NSE broker factsheet</span></p>
            <p style={{fontSize: "9px"}}>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, <span style={{ fontSize: "10px", fontWeight: "500" ,color: "#387ed1"}}>please create a ticket here</span>.</p>
            <p style={{fontSize: "9px"}}>*Customers availing insurance advisory services offered by Ditto (Tacterial Consulting Private Limited | IRDAI Registered Corporate Agent (Composite) License No CA0738) will not have access to the exchange investor grievance redressal forum, SEBI SCORES/ODR, or arbitration mechanism for such products.</p>
          </div>
        </div>


      </div>
    </footer>
  );
}

export default Footer;
