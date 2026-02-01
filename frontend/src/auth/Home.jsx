import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const { data } = await axios.post(
          "http://localhost:3002/auth",
          {},
          { withCredentials: true }
        );

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
    await axios.post(
      "http://localhost:3002/auth/logout",
      {},
      { withCredentials: true }
    );

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
