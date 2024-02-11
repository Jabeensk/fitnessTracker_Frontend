import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <h1>My Burn Buddy</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/workouts">Workouts</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
            <Link to="/nutrition">Nutrition</Link>
            </li>
        
      </ul>
    </nav>
  );
}

export default Nav;

