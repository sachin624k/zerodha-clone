import React, { useState } from "react";
import api from "../api"; // ✅ use shared api
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Signup = () => {
  const [inputValue, setInputValue] = useState({
    email: "",
    username: "",
    password: "",
  });

  const { email, username, password } = inputValue;

  const handleChange = (e) =>
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await api.post("/auth/signup", {
        email,
        username,
        password,
      });

      if (data.success) {
        toast.success("Signup successful");
        setTimeout(() => {
          window.location.href =
            process.env.REACT_APP_DASHBOARD_URL;
        }, 800);
      } else {
        toast.error(data.message);
      }
    } catch {
      toast.error("Signup failed");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">Open a new account</h2>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="input-group">
            <input
              name="email"
              type="email"
              placeholder="Email address"
              value={email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <input
              name="username"
              placeholder="Username"
              value={username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="auth-submit-btn">
            Continue
          </button>

          <div className="auth-footer">
            <p>
              Already have an account?{" "}
              <Link to="/auth/login" className="auth-link-bold">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
