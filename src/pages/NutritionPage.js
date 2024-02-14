import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from "../views/MBBlogo.jpg";
import "../styles.css";

const NutritionPage = ({user}) => {
  const [query, setQuery] = useState("");
  const [nutritionData, setNutritionData] = useState([]);
  const [waterIntake, setWaterIntake] = useState(0);
  const [meals, setMeals] = useState({
    breakfast: "",
    lunch: "",
    dinner: "",
    snacks: "",
  });

  useEffect(() => {
    const fetchNutritionData = async () => {
      try {
        const response = await axios.get(
          `https://api.api-ninjas.com/v1/nutrition?query=${query}`,
          {
            headers: {
              "X-Api-Key": "IFepALMXysh4nTzEMdeJ6A==sSNMhEgl33NHDJPa",
            },
          }
        );
        setNutritionData(response.data);
      } catch (error) {
        console.error("Error fetching nutrition data:", error);
      }
    };

    if (query) {
      fetchNutritionData();
    }
  }, [query]);

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSave = () => {
    
    localStorage.setItem("waterIntake", waterIntake);
    localStorage.setItem("meals", JSON.stringify(meals));
    alert("Data saved successfully!");
  };
const handleSubmit=async(e)=> {
  e.preventDefault();
  const res=await axios.post('https://fitnesstracker-backend2.onrender.com/api/food-diary', {
userId: user._id, 
...meals
  })
console.log(res.data);

}
  return (
    <div>
      <h2>Nutrition</h2>
      <div>
        <label htmlFor="queryInput">Enter Food Item:</label>
        <input
          type="text"
          id="queryInput"
          value={query}
          onChange={handleQueryChange}
        />
      </div>
      <div>
        <h3>Nutrition Information</h3>
        <div style={{ backgroundColor: "orange", padding: "10px", borderRadius: "5px", marginTop: "10px" }}>
         
          {nutritionData.map((item, index) => (
            <div key={index} style={{ marginBottom: "10px", fontWeight: "bold",color: "black"  }}>
              <strong>{item.name}</strong>
              <ul>
                <li>Calories: {item.calories}</li>
                <li>Fat: {item.fat_total_g}g</li>
                <li>Protein: {item.protein_g}g</li>
                <li>Carbohydrates: {item.carbohydrates_total_g}g</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <h3>Food Diary</h3>
        <div>
          <label>Water Intake:</label>
          <input
            type="number"
            value={waterIntake}
            onChange={(e) => setWaterIntake(e.target.value)}
          />
        </div>
        <div>
          <label>Breakfast:</label>
          <input
            type="text"
            value={meals.breakfast}
            onChange={(e) => setMeals({ ...meals, breakfast: e.target.value })}
          />
        </div>
        <div>
          <label>Lunch:</label>
          <input
            type="text"
            value={meals.lunch}
            onChange={(e) => setMeals({ ...meals, lunch: e.target.value })}
          />
        </div>
        <div>
          <label>Dinner:</label>
          <input
            type="text"
            value={meals.dinner}
            onChange={(e) => setMeals({ ...meals, dinner: e.target.value })}
          />
        </div>
        <div>
          <label>Snacks:</label>
          <input
            type="text"
            value={meals.snacks}
            onChange={(e) => setMeals({ ...meals, snacks: e.target.value })}
          />
        </div>
        <button type="submit" className="custom-button">
          Save
        </button>
      </form>
    </div>
  );
};

export default NutritionPage;
