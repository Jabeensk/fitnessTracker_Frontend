import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage';
import Nav from './components/Nav';
import WorkoutsPage from './pages/WorkoutsPage';
import ProfilePage from './pages/ProfilePage';
import NutritionPage from './pages/NutritionPage';


import './styles.css'



function App() {
  const [user, setUser] = useState(null);
  return (
    <Router>
      <div>
        {user ? (
          <>
            <Nav />
            <Routes>
              <Route path="/workouts" element={<WorkoutsPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/nutrition" element={<NutritionPage />} />
            </Routes>
          </>
        ) : (
          <Routes>
            <Route path="/" element={<HomePage setUser={setUser} />} />
            <Route path="/signup" element={<SignupPage setUser={setUser} />} />
            <Route path="/login" element={<SignupPage setUser={setUser} />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
