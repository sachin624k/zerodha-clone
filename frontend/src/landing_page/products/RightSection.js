import React from 'react';

function RightSection({ imageUrl, productName, productDescription, learnMore }) {
  return (
    <div className='container' style={{ marginTop: "90px" }}>
      <div className='row align-items-center'>
        
        <div className='col-6 mt-5' style={{ padding: "0 100px" }}>
          <h1 style={{ fontSize: "25px", color: "#424242" }}>{productName}</h1>
          <p style={{ lineHeight: "33px", fontSize: "17px", color: "#424242" }}>
            {productDescription}
          </p>
          
          <a href={learnMore} style={{ textDecoration: "none", fontSize: "18px" }}>
            Learn More{" "}
            <i className="fa fa-long-arrow-right" style={{ fontSize: "14px", color: "#387ed1" }} />
          </a>
        </div>

        <div className='col-6 d-flex justify-content-start'>
          <img 
            src={imageUrl} 
            style={{ 
              width: "90%",
              maxWidth: "750px", 
              minWidth: "400px",
              objectFit: "contain"
            }} 
            alt="" 
          />
        </div>

      </div>
    </div>
  );
}

export default RightSection;
