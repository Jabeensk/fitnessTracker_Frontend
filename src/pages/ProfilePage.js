import React, { useState, useEffect } from 'react';

import axios from 'axios';
import logo from '../views/MBBlogo.jpg';
import '../styles.css';
import NutritionPage from './NutritionPage';

const ProfilePage = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [foodDiary, setFoodDiary] = useState([]);

  useEffect(() => {
    // Fetch user data
    const fetchUserData = async () => {
      try {
        const userDataResponse = await axios.get(`/api/food-diary/${userId}`); 
        setFoodDiary(foodDiaryResponse.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    // Fetch food diary data
    const fetchFoodDiary = async () => {
      try {
        const foodDiaryResponse = await axios.get(`/api/food-diary/${userId}`);
 
        setFoodDiary(foodDiaryResponse.data);
      } catch (error) {
        console.error('Error fetching food diary:', error);
      }
    };

    // Fetch both user data and food diary data
    fetchUserData();
    fetchFoodDiary();
  }, []);

  return (
    <div>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container-fluid">
        <img src={logo} alt="Logo" className="logo" /> 
          <span className="navbar-brand mb-0 h1"><h1>My Burn Buddy</h1></span>
        
        </div>
      </nav>
      <h2>Profile Page</h2>
      {userInfo && (
        <div>
          <p>First Name: {userInfo.firstName}</p>
          <p>Last Name: {userInfo.lastName}</p>
          <p>Email: {userInfo.email}</p>
          <p>Date of Birth: {userInfo.dateOfBirth}</p>
        </div>
      )}

      <h3>Food Diary</h3>
      <ul>
        {foodDiary.map((entry, index) => (
          <li key={index}>
            <p>Food: {entry.food}</p>
            <p>Calories: {entry.calories}</p>
            <p>Date: {entry.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfilePage;
