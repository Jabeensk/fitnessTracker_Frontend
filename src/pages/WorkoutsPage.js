import React, { useState } from "react";
import { calculateCalories } from "../utils/calculator";
import axios from "axios";
import logo from "../views/MBBlogo.jpg";

function WorkoutsPage() {
  const [activity, setActivity] = useState("");
  const [duration, setDuration] = useState("");
  const [caloriesBurned, setCaloriesBurned] = useState(0);

  const handleCalculate = () => {
    const calories = calculateCalories(activity, duration);
    setCaloriesBurned(calories);
  };

  const handleSaveWorkout = async () => {
    try {
      // Make a POST request to backend to save the workout
      const response = await axios.post("/api/workouts", {
        activity,
        duration,
        caloriesBurned,
      });

      console.log(response.data);

      // reset the form after saving
      setActivity("");
      setDuration("");
      setCaloriesBurned(0);

      alert("Workout saved successfully!");
    } catch (error) {
      console.error("Error saving workout:", error);
      alert("Failed to save workout. Please try again.");
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
      <h1>Workouts Page</h1>
      <div>
        <label>Activity:</label>
        <input
          type="text"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />
      </div>
      <div>
        <label>Duration (in minutes):</label>
        <input
          type="text"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
      </div>
      <button onClick={handleCalculate} className="custom-button">
        Calculate Calories
      </button>
      <div>
        <p>Calories Burned: {caloriesBurned}</p>
      </div>
      <button onClick={handleSaveWorkout} className="custom-button">
        Save Workout
      </button>
    </div>
  );
}

export default WorkoutsPage;
