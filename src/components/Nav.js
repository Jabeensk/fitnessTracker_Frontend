import React from "react";
import { Link } from "react-router-dom";
import logo from "../views/MBBlogo.jpg";
import homeIcon from "../views/homeIcon.jpg";
import exerciseIcon from "../views/workout.jpg";
import profileIcon from "../views/profilepage.jpg";
import nutritionIcon from "../views/nutrition.jpg";

function Nav() {
  return (
    
    <nav>
      <ul>
       
        <img
          src={homeIcon}
          alt="Home"
          style={{ marginRight: "5px", height: "20px", width: "20px" }}
        />
        <Link to="/">Home</Link>

        <img
          src={exerciseIcon}
          alt="Workouts"
          style={{ marginRight: "5px", height: "20px", width: "20px" }}
        />
        <Link to="/workouts">Workouts</Link>

        <img
          src={profileIcon}
          alt="Profile"
          style={{ marginRight: "5px", height: "20px", width: "20px" }}
        />
        <Link to="/profile">Profile</Link>

        <img
          src={nutritionIcon}
          alt="Nutrition"
          style={{ marginRight: "5px", height: "20px", width: "20px" }}
        />
        <Link to="/nutrition">Nutrition</Link>
      </ul>
    </nav>
  );
}

export default Nav;
