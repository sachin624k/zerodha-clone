import React from 'react';

function Hero() {
    return (
        <div className='container p-3 mt-4 mb-0'>
            <div className='row text-center'>
                <img
                    src='media/images/homeHero.png'
                    alt='Hero Image'
                    className='mb-4'
                    style={{
                        width: "72%",
                        margin: "0 auto",
                        maxWidth: "100%"  // responsive support
                    }}
                />

                <h1 className='mt-3 mb-2 fs-4' style={{ color: "#424242" }}>
                    Invest in everything
                </h1>

                <p className='mb-4' style={{ color: "#424242" }}>
                    Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
                </p>

                <button
                    className='p-1 btn fs-6 mb-2'
                    style={{
                        width: "16%",
                        backgroundColor: "#387ed1",
                        color: "white",
                        borderRadius: "2px",
                        margin: "0 auto"
                    }}
                >
                    Sign up for free
                </button>
            </div>

            <style>
                {`
                @media (max-width: 768px) {
                    img {
                        width: 90% !important;
                    }
                    button {
                        width: 60% !important;
                    }
                }

                @media (max-width: 480px) {
                    img {
                        width: 100% !important;
                    }
                    button {
                        width: 80% !important;
                    }
                }
                `}
            </style>
        </div>
    );
}

export default Hero;
