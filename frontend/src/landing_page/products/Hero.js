import React from 'react';

function Hero() {
    return (
        <div className='container border-bottom'>
            <div className='text-center p-3' style={{ marginTop: "100px", color: "#424242"}}>
            <h1 className='fs-2'>Zerodha Products</h1>
            <h3 className='mt-3 fs-4'>Sleek, modern, and intuitive trading platforms</h3>
            <p className='mt-4 fs-5' style={{marginBottom: "100px"}}>
                Check out our{" "} <a href='' style={{textDecoration: "none"}}>investment offerings{" "} <i class="fa fa-long-arrow-right" style={{fontSize: "12px", color: "#387ed1"}} aria-hidden="true"></i></a>
            </p>
            </div>
        </div>
    );
}

export default Hero;