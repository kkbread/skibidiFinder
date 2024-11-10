import React from 'react';
import './ProfilePage.css';

function ProfilePage() {
  return (
    <div className="profile-page">
      {/* Header Section */}
      <header className="profile-header">
        <div className="user-info">
          <h1>Pooper</h1>
          <p>Member since: 8/10/2023</p>
        </div>
        <div className="profile-settings">
          <button className="edit-button">Edit Profile</button>
          <button className="share-button">Share Profile</button>
        </div>
      </header>

      {/* Statistics Section */}
      <section className="statistics">
        <div className="stat-item">
          <h2>19</h2>
          <p>Poops</p>
        </div>
        <div className="stat-item">
          <h2>8</h2>
          <p>Following</p>
        </div>
        <div className="stat-item">
          <h2>4</h2>
          <p>Followers</p>
        </div>
        <div className="stat-item">
          <h2>2</h2>
          <p>Countries</p>
        </div>
        <div className="stat-item">
          <h2>3.08</h2>
          <p>Avg. Rating</p>
        </div>
        <div className="stat-item">
          <h2>0.08</h2>
          <p>Poops/Day</p>
        </div>
        <div className="stat-item">
          <h2>0.53</h2>
          <p>Poops/Week</p>
        </div>
        <div className="stat-item">
          <h2>2.27</h2>
          <p>Poops/Month</p>
        </div>
      </section>

      {/* Saved Rest Stops Section */}
      <section className="saved-rest-stops">
        <div className="section-header">
          <h2>Saved Rest Stops</h2>
          <button className="view-all-button">View All</button>
        </div>
        <div className="playlist-grid">
          {[...Array(6)].map((_, index) => (
            <div className="playlist-item" key={index}>
              <div className="playlist-thumbnail">
                <p>🚻</p>
              </div>
              <h3>Collection {index + 1}</h3>
              <p>Public · 12 Bathrooms</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ProfilePage;
