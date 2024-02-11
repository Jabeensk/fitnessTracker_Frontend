// pages/WorkoutsPage.js

import React, { useState } from 'react';
import { calculateCalories } from '../utils/calculator';

function WorkoutsPage() {
  const [activity, setActivity] = useState('');
  const [duration, setDuration] = useState('');
  const [caloriesBurned, setCaloriesBurned] = useState(0);

  const handleCalculate = () => {
    const calories = calculateCalories(activity, duration);
    setCaloriesBurned(calories);
  };

  return (
    <div>
      <h1>Workouts Page</h1>
      <div>
        <label>Activity:</label>
        <input type="text" value={activity} onChange={(e) => setActivity(e.target.value)} />
      </div>
      <div>
        <label>Duration (in minutes):</label>
        <input type="text" value={duration} onChange={(e) => setDuration(e.target.value)} />
      </div>
      <button onClick={handleCalculate}>Calculate Calories</button>
      <div>
        <p>Calories Burned: {caloriesBurned}</p>
      </div>
    </div>
  );
}

export default WorkoutsPage;
