import React from 'react';

function Pricing() {
  return (
    <div className='container p-3'>
      <div className='row p-5' style={{ marginTop: "-70px" }}>

        {/* Left Side */}
        <div className='col-5 p-5'>
          <h1 className='fs-5 mb-4' style={{ color: "#424242" }}>
            Unbeatable Pricing
          </h1>

          <p className='text-muted mb-3' style={{ fontSize: "14px" }}>
            We pioneered the concept of discount broking and price transparency in India.
            Flat fees and no hidden charges.
          </p>

          <a href='' style={{ textDecoration: "none", fontSize: "13px", color: "#387ed1" }}>
            See Pricing <i className="fa fa-long-arrow-right" style={{ fontSize: "12px", color: "#387ed1" }}></i>
          </a>
        </div>

        {/* Right Side */}
        <div className='col-7 p-5'>
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "28px",
            width: "100%",
            marginTop: "30px",
            marginLeft: "-60px"
          }}>

            <div style={{ display: "flex", alignItems: "center", gap: "5px", flexShrink: 0 }}>
              <img src='media/images/zero1.svg' style={{ height: "75px" }} />
              <p className='text-muted mb-0' style={{ fontSize: "10px", lineHeight: "13px", color: "#6a6a6a", marginLeft: "-20px", marginTop: "18px" }}>
                Free account<br />opening
              </p>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "5px", flexShrink: 0 }}>
              <img src='media/images/zero2.svg' style={{ height: "75px" }} />
              <p className='text-muted mb-0' style={{ fontSize: "10px", lineHeight: "13px", color: "#6a6a6a", marginLeft: "-20px", marginTop: "18px" }}>
                Free equity delivery<br />and direct mutual funds
              </p>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "5px", flexShrink: 0 }}>
              <img src='media/images/twenty.svg' style={{ height: "75px" }} />
              <p className='text-muted mb-0' style={{ fontSize: "10px", lineHeight: "13px", color: "#6a6a6a", marginLeft: "-10px", marginTop: "18px" }}>
                Intraday<br />and F&O
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
