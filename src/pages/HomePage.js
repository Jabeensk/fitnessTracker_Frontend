import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../views/MBBlogo.jpg";
import "../styles.css";

import axios from "axios";
import Nav from "../components/Nav";

function HomePage({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://fitnesstracker-backend2.onrender.com/api/users/signin", {
        email,
        password,
      });
      console.log(res.data);
      setUser(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container-fluid">
          <img src={logo} alt="Logo" className="logo" />
          <span className="navbar-brand mb-0 h1">
            <h1>My Burn Buddy</h1>
          </span>
        </div>
      </nav>

      <div className="welcome-content">
        <h2>Welcome!</h2>
        <p>
          My Burn Buddy helps you track your workouts, calories burned and nutrition to achieve your fitness goals.
        </p>
        

      </div>


      <h3>Login</h3>
      <form onSubmit={handleLogin}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="custom-button">
          Login
        </button>
      </form>
      <p>
        Don't have an account? <Link to="/signup">Create Account</Link>
      </p>
    </div>
  );
}

export default HomePage;
