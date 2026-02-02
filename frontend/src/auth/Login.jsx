import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../api";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await api.post("/auth/login", { email, password });

      if (data.success) {
        toast.success("Login successful");
        setTimeout(() => {
          window.location.href = "https://zerodha-dashboard-psi.vercel.app";
        }, 800);
      }
      else {
        toast.error(data.message);
      }
    } catch {
      toast.error("Login failed");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">Login to Kite</h2>
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="input-group">
            <input
              type="email"
              placeholder="Email (or User ID)"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="auth-submit-btn">
            Login
          </button>

          <div className="auth-footer">
            <Link to="/auth/signup" className="auth-link">
              Forgot user ID or password?
            </Link>
            <p>
              New here?{" "}
              <Link to="/auth/signup" className="auth-link-bold">
                Create account
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
