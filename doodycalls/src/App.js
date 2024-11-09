import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SignUpForm from './components/SignUpForm';
import VideoDemo from './components/VideoDemo';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <div className="hero-and-signup">
          <HeroSection />
          <SignUpForm />
        </div>
        <VideoDemo />
      </main>
      <Footer />
    </div>
  );
}

export default App;
