import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar border-bottom sticky-top" style={{ backgroundColor: "#FFF" }}>
            <div className="container p-2 d-flex align-items-center justify-content-between">

                {/* LOGO */}
                <Link className="navbar-brand" to="/">
                    <img src="media/images/logo.svg" style={{ width: "25%" }} alt="Logo"/>
                </Link>

                {/* NAV LINKS ALWAYS VISIBLE */}
                <ul className="navbar-nav d-flex flex-row text-mutaed fs-6 gap-4 mb-0">
                    <li className="nav-item"><Link className="nav-link active" to="/signup">Signup</Link></li>
                    <li className="nav-item"><Link className="nav-link active" to="/about">About</Link></li>
                    <li className="nav-item"><Link className="nav-link active" to="/products">Products</Link></li>
                    <li className="nav-item"><Link className="nav-link active" to="/pricing">Pricing</Link></li>
                    <li className="nav-item"><Link className="nav-link active" to="/support">Support</Link></li>
                </ul>

                {/* HAMBURGER ALWAYS ON SCREEN */}
                <div className="hamburger cursor-pointer d-flex flex-column justify-content-between" style={{ width: "22px", height: "16px" }}>
                    <span style={{ height: "2px", background: "#000" }}></span>
                    <span style={{ height: "2px", background: "#000" }}></span>
                    <span style={{ height: "2px", background: "#000" }}></span>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;
