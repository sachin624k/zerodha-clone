import React from 'react';

function Home() {
    return (
        <div className='container'>
            <div className='row p-5 mt-5 text-center'>
                <h2>Charges</h2>
                <h3 className='fs-5' style={{ color: "#9b9b9b" }}>List of all charges and taxes</h3>
            </div>
            <div className='row p-5 mt-5 text-center'>
                <div className='col-4 p-5'>
                    <img src='media/images/pricingEquity.svg' />
                    <h3>Free equity delivery</h3>
                    <p className='text-muted'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col-4 p-5'>
                    <img src='media/images/intradayTrades.svg' />
                    <h3>Intraday and F&O trades</h3>
                    <p className='text-muted'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className='col-4 p-5'>
                    <img src='media/images/pricingEquity.svg' />
                    <h3>Free direct MF</h3>
                    <p className='text-muted'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
    );
}

export default Home;