import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import "../App.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "admin" && password === "admin") {
      navigate("/admin");
    } else if (username === "user" && password === "user") {
      navigate("/user");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="container-fluid">
      <div className="d-flex align-items-center justify-content-center">
        <div className="d-flex flex-column shadow p-3 mb-5 bg-body-tertiary custom-rounded">
          <div className="d-flex align-items-center justify-content-center">
            <h2>
              <FaUserCircle className="m-1" />
              Login
            </h2>
          </div>
          <input
            className="mt-2"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="mt-2"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            class="btn btn-primary mt-2 "
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
