import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage';
import Nav from './components/Nav';
import WorkoutsPage from './pages/WorkoutsPage';
import ProfilePage from './pages/ProfilePage';
import NutritionPage from './pages/NutritionPage';

function App() {
  return (
    <Router>
    <div>
      <Nav /> {/* Add the Nav component here */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/workouts" element={<WorkoutsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/nutrition" element={<NutritionPage />} /> 
      </Routes>
    </div>
  </Router>
  );
}

export default App;

