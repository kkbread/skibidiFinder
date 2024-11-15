import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage'; // Added this line
import MapPage from './components/MapPage';
import ProfilePage from './components/ProfilePage';
import LoginPage from './components/LoginPage';
//import ForumPage from './components/ForumPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}
//<Route path="/forum" element={<ForumPage />} />

export default App;