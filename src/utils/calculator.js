// utils/calculator.js

// Define the data for calories burned per hour for different activities
const activityData = {
    walking: 176,
    cycling: 422,
    running: 704,
    swimming: 563
  };
  
  // Function to calculate calories burned
  export function calculateCalories(activity, duration) {
    const rate = activityData[activity.toLowerCase()];
    if (!rate) {
      return 0; // Return 0 if activity is not found in the data
    }
    const caloriesBurned = rate * (duration / 60); // Assuming duration is in minutes
    return caloriesBurned;
  }
  