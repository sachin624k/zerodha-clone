import React, { useEffect, useState } from "react";
import axios from "axios";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  const [authChecked, setAuthChecked] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const verifyAuth = async () => {
      try {
        const res = await axios.post(
          "http://localhost:3002/auth", 
          {}, 
          { withCredentials: true }
        );

        if (res.data.status) {
          setIsAuthenticated(true);
        } else {
          window.location.replace("http://localhost:3000/auth/login");
        }
      } catch (err) {
        window.location.replace("http://localhost:3000/auth/login");
      } finally {
        setAuthChecked(true);
      }
    };

    verifyAuth();
  }, []);

  if (!authChecked) return null;
  if (!isAuthenticated) return null;

  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;