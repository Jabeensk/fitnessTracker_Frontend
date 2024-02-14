import React from "react";
import { Link } from "react-router-dom";
import logo from "../views/MBBlogo.jpg";
import homeIcon from "../views/burn.jpg";
import exerciseIcon from "../views/workout.jpg";
import profileIcon from "../views/profilepage.jpg";
import nutritionIcon from "../views/nutrition.jpg";
import healthIcon from "../views/health.jpg";


function Nav({ handleLogout }) {
  const logout = () => {
    
    handleLogout();
  };
  
  return (
    <nav>
      
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
        <img
          src={healthIcon}
          alt="health"
          style={{ height: "200px", width: "200px" }}
          className="health"
          />
          <nav className="navbar navbar-dark bg-primary">
        <div className="container-fluid">
          <img src={logo} alt="Logo" className="logo" />
          <span className="navbar-brand mb-0 h1">
            <h1>My Burn Buddy</h1>
          </span>
        </div>
        
      </nav>
      </div>


      <ul>
       
        <img
          src={homeIcon}
          alt="Home"
          style={{ marginRight: "20px", height: "60px", width: "50px" }}
        />
        <Link to="/">Home</Link>

        <img
          src={exerciseIcon}
          alt="Workouts"
          style={{ marginRight: "20px", height: "60px", width: "50px" }}
        />
        <Link to="/workouts">Workouts</Link>

        <img
          src={profileIcon}
          alt="Profile"
          style={{ marginRight: "20px", height: "60px", width: "50px" }}
        />
        <Link to="/profile">Profile</Link>

        <img
          src={nutritionIcon}
          alt="Nutrition"
          style={{ marginRight: "20px", height: "60px", width: "50px" }}
         
        />
        <Link to="/nutrition">Nutrition</Link>

        <img
          src={logo}
          alt="Nutrition"
          style={{ marginRight: "20px", height: "60px", width: "50px" }}
         
        />
        <Link to="/about">About</Link>

        <button onClick={logout} className="custom-button">
          Logout
        </button>
      </ul>
    </nav>
  );
}

export default Nav;
