import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

const Home = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const { data } = await api.post("/auth");

        if (!data.status) {
          navigate("/auth/login", { replace: true });
        } else {
          setUsername(data.user);
        }
      } catch {
        navigate("/auth/login", { replace: true });
      }
    };

    verifyUser();
  }, [navigate]);

  const logout = async () => {
    await api.post("/auth/logout");
    navigate("/", { replace: true });
  };

  return (
    <div className="auth-page">
      <div className="auth-box">
        <h2>Welcome, {username}</h2>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
};

export default Home;
