// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/HomePage'; // Corrected import path
import PetAdoption from './Pages/PetAdoption';
import ShelterManagement from './Pages/ShelterManagement';
import Login from './Pages/login'; // Corrected import path
import Signup from './Pages/signup'; // Corrected import path

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adopt" element={<PetAdoption />} />
          <Route path="/shelter-management" element={<ShelterManagement />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
