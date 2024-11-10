import React from 'react';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-page">
      <header className="hero-section">
        <h1>Can't poop?</h1>
        <p>PooPursuit is here to save the day! An application designed to empower users in their ability to locate and utilize public amenities. Having easy access to schools, healthcare, shops, and transportation not only improves overall quality of life but can also serve as a vital service.</p>
        <a href="#video-demo" className="cta-link">See it in action</a>
      </header>

      <section className="signup-section">
        <h2>Log in to Poop Today!</h2>
        <button className="google-signup">Sign up with Google</button>
        <p>Or use your email address</p>
        <form className="email-signup">
          <input type="text" placeholder="Your first name" />
          <input type="text" placeholder="Your last name" />
          <input type="email" placeholder="Your email address" />
          <input type="password" placeholder="Pick a password" />
          <button type="submit">Sign Up for Amazing Poops</button>
        </form>
      </section>

      <section id="video-demo" className="video-demo-section">
        <h2>Demo</h2>
        <div className="video-placeholder">16:9 Video Placeholder</div>
        <p>Video content showcasing the features of PooPursuit...</p>
      </section>

      <footer className="footer-section">
        <h2>Effortless Abcdefg</h2>
        <p>Do the things you do, but better!</p>
      </footer>
    </div>
  );
}

export default HomePage;
