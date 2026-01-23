import React from 'react';

function OpenAccount() {
    return (
        <div className='container p-4 mb-5'>
            <div className='row text-center'>
                <h1 className='fs-5 mb-4' style={{ color: "#424242" }}>Open a Zerodha account</h1>
                <p className='text-muted mb-4' style={{ fontSize: "14px" }}>Modern plateforms and apps, &#8377;0 investments, and flat &#8377;20 intraday and F&O trades.</p>
                <button className='p-1 btn fs-5 mb-2' style={{ width: "15%", backgroundColor: "#387ed1", color: "white", borderRadius: "3px", margin: "0 auto" }}>Sign up for free</button>
            </div>
        </div>
    );
}

export default OpenAccount;
