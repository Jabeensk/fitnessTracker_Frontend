import React, { useState, useEffect } from "react";

import axios from "axios";
import logo from "../views/MBBlogo.jpg";
import "../styles.css";
import NutritionPage from "./NutritionPage";

const ProfilePage = ({user}) => {
  const [userInfo, setUserInfo] = useState(null);
  const [foodDiary, setFoodDiary] = useState([]);
  const [workouts, setWorkouts] = useState([]);


  useEffect(() => {
    // Fetch user data
    const fetchUserData = async () => {
      try {
        const userDataResponse = await axios.get(`http://localhost:4000/api/food-diary/${user._id}`);
        setUserInfo(userDataResponse.data);
        console.log(userDataResponse);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    // Fetch food diary data
    const fetchFoodDiary = async () => {
      try {
        const foodDiaryResponse = await axios.get(`https://fitnesstracker-backend2.onrender.com/api/food-diary/${user._id}`);
        console.log(foodDiaryResponse.data);
        setFoodDiary(foodDiaryResponse.data);
      } catch (error) {
        console.error("Error fetching food diary:", error);
      }
    };
console.log(foodDiary);
console.log(userInfo);

    fetchUserData();
    fetchFoodDiary();
  }, []);

  return (
    <div>
      <h3>Profile</h3>
      {user && (
        <div>
          <p>First Name: {user.firstName}</p>
          <p>Last Name: {user.lastName}</p>
          <p>Email: {user.email}</p>
          <p>Date of Birth: {user.dateOfBirth}</p>
        </div>
      )}

      <h3>Food Diary</h3>
      <ul>
        {foodDiary.map((entry, index) => (
          <li key={index}>
            <p>Water: {entry.waterIntake}</p>
            <p>Breakfast: {entry.breakfast}</p>
            <p>Lunch: {entry.lunch}</p>
            <p>Dinner: {entry.dinner}</p>
            <p>Snacks: {entry.snacks}</p>
          </li>
        ))}
      </ul>

      

    </div>
  );
};

export default ProfilePage;
