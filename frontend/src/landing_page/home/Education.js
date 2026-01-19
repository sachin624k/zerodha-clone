import React from 'react';

function Education() {
  return (
    <div className='container p-3'>
      <div className='row p-5' style={{ marginTop: "-90px" }}>
        
        {/* Left Side (Image) */}
        <div className='col-5 p-5'>
          <div style={{ marginTop: "-2px", marginLeft: "10px" }}>
            <img src='media/images/education.svg' style={{ width: "105%" }} />
          </div>
        </div>

        {/* Right Side (Text) */}
        <div className='col-7 p-5' style={{ marginTop: "10px" }}>
          <h1 className='fs-5 mb-4' style={{ color: "#424242" }}>
            Free and open market education
          </h1>

          <p className='text-muted mb-3' style={{ fontSize: "14px" }}>
            Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
          </p>

          <a href='' style={{ textDecoration: "none", color: "#387ed1", fontSize: "13px" }}>
            Varsity <i class="fa fa-long-arrow-right" style={{ fontSize: "12px", color: "#387ed1" }}></i>
          </a>

          <p className='mt-4 text-muted mb-3' style={{ fontSize: "14px" }}>
            TradingQ&A, the most active trading and investment community in India for all your market related queries.
          </p>

          <a href='' style={{ textDecoration: "none", color: "#387ed1", fontSize: "13px" }}>
            TradingQ&A <i class="fa fa-long-arrow-right" style={{ fontSize: "12px", color: "#387ed1" }}></i>
          </a>
        </div>

      </div>
    </div>
  );
}

export default Education;
