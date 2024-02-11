import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NutritionPage = () => {
  const [query, setQuery] = useState('');
  const [nutritionData, setNutritionData] = useState([]);

  useEffect(() => {
    const fetchNutritionData = async () => {
      try {
        const response = await axios.get(`https://api.api-ninjas.com/v1/nutrition?query=${query}`, {
          headers: { 'X-Api-Key': 'IFepALMXysh4nTzEMdeJ6A==sSNMhEgl33NHDJPa' } 
        });
        setNutritionData(response.data);
      } catch (error) {
        console.error('Error fetching nutrition data:', error);
      }
    };

    if (query) {
      fetchNutritionData();
    }
  }, [query]);

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div>
      <h2>Nutrition Page</h2>
      <div>
        <label htmlFor="queryInput">Enter Food Item:</label>
        <input type="text" id="queryInput" value={query} onChange={handleQueryChange} />
      </div>
      <div>
        <h3>Nutrition Information</h3>
        <ul>
          {nutritionData.map((item, index) => (
            <li key={index}>
              <strong>{item.name}</strong>
              <ul>
                <li>Calories: {item.calories}</li>
                <li>Fat: {item.fat_total_g}g</li>
                <li>Protein: {item.protein_g}g</li>
                <li>Carbohydrates: {item.carbohydrates_total_g}g</li>
              
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NutritionPage;
