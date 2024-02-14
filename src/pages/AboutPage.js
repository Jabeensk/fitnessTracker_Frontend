import React from "react";
import logo from "../views/MBBlogo.jpg";
import "../styles.css";

function AboutPage() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container-fluid">
          <img src={logo} alt="Logo" className="logo" />
          <span className="navbar-brand mb-0 h1">
            <h1>About My Burn Buddy</h1>
          </span>
        </div>
      </nav>

      <div className="about-content">
        <h2>Welcome to My Burn Buddy!</h2>
        <p>
          My Burn Buddy is a fitness application designed to help you achieve your health and fitness goals. Whether you're looking to lose weight, build muscle, or improve your overall fitness level, My Burn Buddy provides the tools and resources you need to succeed.
        </p>
        <h3>Key Features</h3>
        <ul>
          <li>Calculate Calories burned after workout</li>
          <li>Access nutrition information for various foods</li>
          <li>Record your nutrition and water intake with a food diary</li>
          <li>View your information on your profile page!</li>
        </ul>
        <h3>How to Use</h3>
        <p>
          Getting started with My Burn Buddy is easy! Simply sign up for an account, log in, and start using the various features to track your fitness journey. Whether you're a beginner or an experienced fitness enthusiast, My Burn Buddy is here to support you every step of the way.
        </p>
        <h3>Get Started Today!</h3>
        <p>
          Ready to take control of your health and fitness? Sign up for My Burn Buddy today and start working towards your goals!
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
