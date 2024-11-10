import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
//import MapPage from './components/MapPage';
import AboutPage from './components/AboutPage';
//import ForumPage from './components/ForumPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
/*
<Route path="/map" element={<MapPage />} />
<Route path="/forum" element={<ForumPage />} />
*/