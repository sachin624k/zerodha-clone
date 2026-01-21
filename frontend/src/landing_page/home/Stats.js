import React from 'react';

function Stats() {
    return (
        <div className='container p-3'>
            <div className='row p-5'>
                <div className='col-5 p-5 stats-left'>
                    <h1 className='fs-5 mb-5' style={{ color: "#424242"}}>Trust with confidence</h1>
                    <h2 className='fs-6' style={{ color: "#424242"}}>Customer-first always</h2>
                    <p className='text-muted pb-3' style={{ fontSize: "14px" }}>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
                    <h2 className='fs-6' style={{ color: "#424242"}}>No spams or gimmicks</h2>
                    <p className='text-muted pb-3' style={{ fontSize: "14px" }}>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
                    <h2 className='fs-6' style={{ color: "#424242"}}>The Zerodha universe</h2>
                    <p className='text-muted pb-3' style={{ fontSize: "14px" }}>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <h2 className='fs-6' style={{ color: "#424242"}}>Do better with money</h2>
                    <p className='text-muted pb-3' style={{ fontSize: "14px" }}>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>

                <div className='col-7 p-5 stats-right'>
                    <img src='media/images/ecosystem.png' style={{ width: "100%" }} />
                    <div className='text-center'>
                        <a href='' className='mx-5 mt-3 d-inline-block' style={{ textDecoration: "none", fontSize: "13px", color: "#387ed1"}}>Explore our products <i class="fa fa-long-arrow-right" style={{fontSize: "12px", color: "#387ed1"}} aria-hidden="true"></i></a>
                        <a href='' style={{ textDecoration: "none", fontSize: "13px", color: "#387ed1"}}>Try kite demo <i class="fa fa-long-arrow-right" style={{fontSize: "12px", color: "#387ed1"}} aria-hidden="true"></i></a>
                    </div>
                </div>

                <div className="col-12 text-center mb-0" style={{ marginTop: "-20px" }}>
                    <img src='media/images/pressLogos.png' style={{ width: "55%" }}/>
                </div>
            </div>

            <style>
                {`
                @media (max-width: 992px) {
                    .stats-left, .stats-right {
                        width: 100% !important;
                        max-width: 100% !important;
                        flex: 0 0 100% !important;
                        text-align: center;
                        padding: 20px !important;
                    }
                    .stats-right img {
                        width: 100% !important;
                    }
                }

                @media (max-width: 600px) {
                    .stats-right a {
                        display: block !important;
                        margin: 10px auto !important;
                    }
                    .col-12 img {
                        width: 90% !important;
                    }
                }
                `}
            </style>
        </div>
    );
}

export default Stats;
