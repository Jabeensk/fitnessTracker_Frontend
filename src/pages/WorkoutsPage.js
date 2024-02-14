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

     
      setActivity("");
      setDuration("");
      setCaloriesBurned(0);

      alert("Workout saved successfully!");
    } catch (error) {
      console.error("Error saving workout:", error);
      alert("Failed to save workout. Please try again.");
    }
  };

  const activityOptions = [
    "Running",
    "Walking",
    "Cycling",
    "Swimming",
    
  ];


  return (
    <div>
      <h1>Workouts</h1>
      <div>
        <label>Activity:</label>
        <select
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        >
          <option value="">Select an activity</option>
          {activityOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
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
      
      <div style={{ backgroundColor: "orange", padding: "10px", borderRadius: "5px", marginTop: "10px" }}>
        <p style={{ fontSize: "24px", fontWeight: "bold", color: "black" }}>
          Calories Burned: {caloriesBurned}
        </p>
      </div>
      
      
      
      {/* <button type="submit" className="custom-button">
        Save Workout
      </button> */}
    </div>
  );
}

export default WorkoutsPage;
