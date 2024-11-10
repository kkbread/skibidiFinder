import React from 'react';
import HeroSection from './/HeroSection';
import SignUpForm from './SignUpForm';
import VideoDemo from './VideoDemo';
import './HomePage.css';

function HomePage() {
  return (
    <div className="App">
      <main>
        <div className="hero-and-signup">
          <HeroSection />
          <SignUpForm />
        </div>
        <VideoDemo />
      </main>
    </div>
  );
}

export default HomePage;
