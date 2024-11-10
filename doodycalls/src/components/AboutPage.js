import React from 'react';
import './AboutPage.css';

function AboutPage() {
  return (
    <div className="about-page">
      <header className="about-header">
        <img src="team-image-placeholder.png" alt="Team" />
        <div>
          <h1>The Shitters!!!</h1>
          <p>ITWS/CS Majors</p>
        </div>
      </header>

      <section className="team-section">
        {[...Array(4)].map((_, index) => (
          <div className="team-member" key={index}>
            <div className="avatar">😊</div>
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
