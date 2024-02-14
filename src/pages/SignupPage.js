import React, { useState } from "react";
import axios from "axios";
import logo from '../views/MBBlogo.jpg';
import '../styles.css';

const SignupPage = ({ setUser }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://fitnesstracker-backend2.onrender.com/api/users", {
        firstName,
        lastName,
        email,
        dateOfBirth,
        password,
      });
      console.log(res.data);
      setUser(res.data);
    } catch (error) {}
  
    console.log("Signup button clicked");
  };

  return (
    <div>
     <nav className="navbar navbar-dark bg-primary">
        <div className="container-fluid">
        <img src={logo} alt="Logo" className="logo" /> 
          <span className="navbar-brand mb-0 h1"><h1>My Burn Buddy</h1></span>
        
        </div>
      </nav>
      <h2>Create Account</h2>
      <form onSubmit={handleSignup}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="username">Username:</label>{" "}
         
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="dateOfBirth">Date of Birth:</label>
          <input
            type="date"
            id="dateOfBirth"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">password:</label>{" "}
         
          <input
            type="text"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit"className="custom-button" >Sign Up</button>
      </form>
    </div>
  );
};

export default SignupPage;
