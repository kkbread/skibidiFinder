import React from 'react';
import './VideoDemo.css';

function VideoDemo() {
  return (
    <div className="video-demo">
      <video width="100%" height="auto" controls>
        <source src="demo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h3>Demo</h3>
      <p>Explanation text for the demo goes here.</p>
    </div>
  );
}

export default VideoDemo;
