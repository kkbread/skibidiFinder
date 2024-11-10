import React from 'react';
import './MapPage.css';

function MapPage() {
  return (
    <div className="map-page">
      <div className="stats">
        <h2>12,869,323</h2>
        <p>Total Visits</p>
        <p>↑ 12% since last week</p>
      </div>

      <div className="search-bar">
        <input type="text" placeholder="Find name or place..." />
      </div>

      <div className="map-container">
        {/* Placeholder for map */}
      </div>

      <div className="bathroom-cards">
        {[...Array(4)].map((_, index) => (
          <div className="bathroom-card" key={index}>
            <h3>Place</h3>
            <p>Rating: ★★★★☆</p>
            {/* Placeholder icons */}
            <p>Features: 🚻 ♿ ⭐ </p>
          </div>
        ))}
      </div>

      <div className="comments-section">
        <h3>Comments</h3>
        {[...Array(2)].map((_, index) => (
          <div className="comment" key={index}>
            <div className="avatar">😊</div>
            <div className="comment-content">
              <p><strong>John Doe</strong> - Posted Sep 9, 2024</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            </div>
          </div>
        ))}
      </div>

      <div className="post-comment">
        <div className="avatar">😊</div>
        <textarea placeholder="Write a comment..."></textarea>
        <button>Post Comment</button>
      </div>
    </div>
  );
}

export default MapPage;
