import React, { useEffect, useState } from "react";
import api from "../api";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  const [authChecked, setAuthChecked] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const verifyAuth = async () => {
      try {
        const res = await api.post("/auth");
        console.log("Auth Response:", res.data);

        if (res.data.status) {
          setIsAuthenticated(true);
          setUser(res.data.user);
        } else {
          console.warn("Session invalid, redirecting...");
          window.location.replace(`${process.env.REACT_APP_FRONTEND_URL}/auth/login`);
        }
      } catch (err) {
        console.error("Auth check failed:", err);
        window.location.replace(`${process.env.REACT_APP_FRONTEND_URL}/auth/login`);
      } finally {
        setAuthChecked(true);
      }
    };
    verifyAuth();
  }, []);

  if (!authChecked) return <div>Loading...</div>;

  if (!isAuthenticated) return null;

  return (
    <>
      <TopBar />
      <Dashboard username={user} /> 
    </>
  );
};

export default Home;