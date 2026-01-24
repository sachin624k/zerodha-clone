import React from 'react';

function Universe() {
    return (
        <div className="container" style={{ marginTop: "90px" }}>

            <h2 className="text-center mb-2" style={{ color: "#424242" }}>
                The Zerodha Universe
            </h2>

            <p className="text-center mb-5" style={{ color: "#6c757d" }}>
                Extend your trading and investment experience even further with our partner platforms
            </p>

            {/* 1st row */}
            <div className="row justify-content-center text-center mb-4">

                <div className="col-md-4 mb-4">
                    <img src="media/images/zerodhaFundhouse.png" style={{ width: "160px" }} alt="" />
                    <p className="mt-3" style={{ fontSize: "14px", color: "#6c757d", width: "75%", margin: "0 auto" }}>
                        Our asset management venture that is creating simple and transparent index funds to help you save for your goals.
                    </p>
                </div>

                <div className="col-md-4 mb-4">
                    <img src="media/images/sensibullLogo.svg" style={{ width: "160px" }} alt="" />
                    <p className="mt-3" style={{ fontSize: "14px", color: "#6c757d", width: "75%", margin: "0 auto" }}>
                        Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.
                    </p>
                </div>

                <div className="col-md-4 mb-4">
                    <img src="media/images/tijori.svg" style={{ width: "150px" }} alt="" />
                    <p className="mt-3" style={{ fontSize: "14px", color: "#6c757d", width: "75%", margin: "0 auto" }}>
                        Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.
                    </p>
                </div>

            </div>

            {/* 2nd row */}
            <div className="row justify-content-center text-center">

                <div className="col-md-4 mb-4">
                    <img src="media/images/streakLogo.png" style={{ width: "130px" }} alt="" />
                    <p className="mt-3" style={{ fontSize: "14px", color: "#6c757d", width: "75%", margin: "0 auto" }}>
                        Systematic trading platform that allows you to create and backtest strategies without coding.
                    </p>
                </div>

                <div className="col-md-4 mb-4">
                    <img src="media/images/smallcaseLogo.png" style={{ width: "140px" }} alt="" />
                    <p className="mt-3" style={{ fontSize: "14px", color: "#6c757d", width: "75%", margin: "0 auto" }}>
                        Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.
                    </p>
                </div>

                <div className="col-md-4 mb-4">
                    <img src="media/images/dittoLogo.png" style={{ width: "150px" }} alt="" />
                    <p className="mt-3" style={{ fontSize: "14px", color: "#6c757d", width: "75%", margin: "0 auto" }}>
                        Personalized advice on life and health insurance. No spam and no mis-selling.
                    </p>
                </div>
                <button
                    className='p-1 btn fs-5 mb-2'
                    style={{
                        width: "15%",
                        backgroundColor: "#387ed1",
                        color: "white",
                        borderRadius: "3px",
                        margin: "0 auto",
                        marginTop: "25px"
                    }}
                >
                    Sign up for free
                </button>
            </div>

        </div>
    );
}

export default Universe;
