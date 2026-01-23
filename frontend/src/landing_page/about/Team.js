import React from 'react';

function Team() {
    return (
        <div className='container'>
            <div className='row p-3 mt-0'>
                <h1 className='text-center' style={{ fontSize: "26px", color: "#424242" }}>People
                </h1>
            </div>
            <div className='row p-3 text-muted'>
                <div className='col-5 p-3 text-center'>
                    <img src="media/images/nithinKamath.jpg" style={{ marginLeft: "120px", borderRadius: "100%", width: "60%" }} />
                    <h4 className='mt-4' style={{ marginLeft: "120px", fontSize: "20px", fontWeight: "400", color: "#424242" }}>Nithin Kamath</h4>
                    <h6 className='mt-3' style={{ marginLeft: "120px", fontSize: "15px", fontWeight: "350", color: "#666666" }}>Founder, CEO</h6>
                </div>
                <div className='col-7 p-3' style={{ lineHeight: "1.8", fontSize: "1.1em" }}>
                    <p>
                        Nithin bootstrapped and founded Zerodha in 2010 to overcome the<br/> hurdles he faced during his decade long stint as a trader. Today,<br/> Zerodha has changed the landscape of the Indian broking industry.
                    </p>
                    <p>
                        He is a member of the SEBI Secondary Market Advisory Committee<br/> (SMAC) and the Market Data Advisory Committee (MDAC).
                    </p>
                    <p>
                        Playing basketball is his zen.
                    </p>
                    <p>
                        Connect on <a href='https://nithinkamath.me/' style={{textDecoration: "none"}}>Homepage</a> / <a href='https://tradingqna.com/u/nithin/summary' style={{textDecoration: "none"}}>TradingQnA</a> / <a href='https://x.com/Nithin0dha' style={{textDecoration: "none"}}>Twitter</a>
                    </p>
                </div>
            </div>

            <div className='row p-3 text-muted'>
                <div className='col-5 p-3 text-center'>
                    <img src="media/images/sachin.jpeg" style={{ marginLeft: "120px", borderRadius: "90%", width: "60%", height: "80%" }} />
                    <h4 className='mt-4' style={{ marginLeft: "120px", fontSize: "20px", fontWeight: "400", color: "#424242" }}>Sachin Kushwaha</h4>
                    <h6 className='mt-3' style={{ marginLeft: "120px", fontSize: "15px", fontWeight: "350", color: "#666666" }}>Cloner</h6>
                </div>
                <div className='col-7 p-3' style={{ lineHeight: "1.8", fontSize: "1.1em" }}>
                    <p>
                        Sachin is a web developer currently cloning Zerodha’s platform to study<br /> its product architecture, design language, and UX philosophy. His work<br /> revolves around implementing responsive layouts, reusable components,<br/> and clean interaction patterns.
                    </p>
                    <p>
                        Most days, he’s learning something new, breaking something old, and<br />trying to build things that make sense.
                    </p>
                    <p>
                        Outside of code, he follows geopolitics and new ideas.
                    </p>
                    <p>
                        Connect on <a href='https://x.com/sachin624k' style={{textDecoration: "none"}}>Twitter</a> / <a href='https://www.linkedin.com/in/sachin624k/' style={{textDecoration: "none"}}>Linkedin</a> / <a href='https://github.com/sachin624k' style={{textDecoration: "none"}}>GitHub</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Team;