import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import Nav from "./components/Nav";
import WorkoutsPage from "./pages/WorkoutsPage";
import ProfilePage from "./pages/ProfilePage";
import NutritionPage from "./pages/NutritionPage";
import AboutPage from "./pages/AboutPage";

import "./styles.css";

function App() {
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(null);

  const handleLogout = () => {
   
    setUser(null); // For example, set the user state to null
  };

  const handleLogin = (userId) => {
    setUserId(userId);
  };

  return (
    <Router>
      <div>
      
        <p>
          Live, Laugh, Run....Start tracking!
        </p>
        {user ? (
          <>
            <Nav handleLogout={handleLogout} />
            <Routes>
              <Route path="/workouts" element={<WorkoutsPage user={user} />} />
              <Route path="/profile" element={<ProfilePage user={user} />} />
              <Route
                path="/nutrition"
                element={<NutritionPage user={user} />}
              />
               <Route path="/about" element={<AboutPage />} />
            </Routes>
          </>
        ) : (
          <Routes>
            <Route path="/" element={<HomePage setUser={setUser} />} />
            <Route path="/signup" element={<SignupPage setUser={setUser} />} />
            <Route path="/login" element={<SignupPage setUser={setUser} />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
