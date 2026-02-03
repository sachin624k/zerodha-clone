import React, { useEffect, useState } from "react";
import api from "../api";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  const [authChecked, setAuthChecked] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const verifyAuth = async () => {
      const frontendURL = process.env.REACT_APP_FRONTEND_URL || "http://localhost:3000";

      try {
        const res = await api.post("/auth");
        if (res.data.status) {
          setUser(res.data.user);
        } else {
          window.location.replace(`${frontendURL}/auth/login`);
        }
      } catch (err) {
        window.location.replace(`${frontendURL}/auth/login`);
      } finally {
        setAuthChecked(true);
      }
    };
    verifyAuth();
  }, []);

  if (!authChecked) return <div>Loading...</div>;

  return (
    <>
      <TopBar />
      <Dashboard username={user} /> 
    </>
  );
};

export default Home;