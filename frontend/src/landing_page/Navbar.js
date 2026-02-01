import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Navbar() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { data } = await axios.post(
          "http://localhost:3002/auth",
          {},
          { withCredentials: true }
        );
        setLoggedIn(data.status);
      } catch {
        setLoggedIn(false);
      }
    };

    checkAuth();
  }, []);

  return (
    <nav className="navbar border-bottom sticky-top bg-white">
      <div className="container d-flex justify-content-between align-items-center">

        <Link className="navbar-brand" to="/">
          <img src="media/images/logo.svg" width="120" alt="logo" />
        </Link>

        <ul className="navbar-nav d-flex flex-row gap-4 mb-0">
          {!loggedIn && (
            <li><Link className="nav-link" to="/auth/signup">Signup</Link></li>
          )}

          {loggedIn && (
            <li>
              <a className="nav-link" href="http://localhost:3001">
                Dashboard
              </a>
            </li>
          )}

          <li><Link className="nav-link" to="/about">About</Link></li>
          <li><Link className="nav-link" to="/products">Products</Link></li>
          <li><Link className="nav-link" to="/pricing">Pricing</Link></li>
          <li><Link className="nav-link" to="/support">Support</Link></li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;
