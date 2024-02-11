import axios from 'axios';

const BASE_URL = 'https://api.api-ninjas.com/v1';
const API_KEY = 'IFepALMXysh4nTzEMdeJ6A==sSNMhEgl33NHDJPa'; 
// Function to get the full list of activities supported by the API
export const getActivities = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/caloriesburnedactivities`, {
            headers: { 'X-Api-Key': API_KEY }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching activities:', error);
        return null;
    }
};

// Function to calculate calories burned for given activity, weight, and duration
export const calculateCaloriesBurned = async (activity, weight = 160, duration = 60) => {
    try {
        const response = await axios.get(`${BASE_URL}/caloriesburned`, {
            params: { activity, weight, duration },
            headers: { 'X-Api-Key': API_KEY }
        });
        return response.data;
    } catch (error) {
        console.error('Error calculating calories burned:', error);
        return null;
    }
};
