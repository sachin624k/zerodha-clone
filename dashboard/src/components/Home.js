import React, { useEffect, useState } from "react";
import api from "../api";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  const [authChecked, setAuthChecked] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const verifyAuth = async () => {
      try {
        const res = await api.post("/auth");

        if (res.data.status) {
          setIsAuthenticated(true);
        } else {
          window.location.replace(
            `${process.env.REACT_APP_FRONTEND_URL}/auth/login`
          );
        }
      } catch (err) {
        window.location.replace(
          `${process.env.REACT_APP_FRONTEND_URL}/auth/login`
        );
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
