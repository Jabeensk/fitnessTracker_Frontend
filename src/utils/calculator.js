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
      return 0; 
    }
    const caloriesBurned = rate * (duration / 60); 
    return caloriesBurned;
  }
  