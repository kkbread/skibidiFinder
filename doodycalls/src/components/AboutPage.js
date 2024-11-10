import React from 'react';
import './AboutPage.css';
import kaitlinImage from "../assets/kaitlin.png"; // Adjust path as needed
import jamieImage from "../assets/jamie.png";

function AboutPage() {
  return (
    <div className="about-page">
      <header className="about-header">
        <div>
          <h1>The Shitters!!!</h1>
          <p>ITWS/CS Majors</p>
        </div>
      </header>

      <section className="team-section">
        {[...Array(4)].map((_, index) => (
          <div className="team-member" key={index}>
            <div className="member-info">
              <p><strong>Team Member {index + 1}</strong></p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non justo vitae risus tempus consequat.</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default AboutPage;
