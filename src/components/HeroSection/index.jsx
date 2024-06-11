import React from 'react';
import { Link } from 'react-router-dom';
import HeroImage from "../gallery/dancing-people-club.jpg";

const HeroSection = () => {
  const handleButtonClick = () => {
    console.log('Redirecting to event page');
  };

  return (
    <div className="hero-section">
      <img src={HeroImage} alt="Hero Image"></img>
      <div className="hero-content">
        <h1>Welcome to CaptureIt</h1>
        <p>Share your best moments with your friends and family</p>
        {/* <Link to="/event">
          <button onClick={handleButtonClick}>Go to Events</button>
        </Link> */}
      </div>
    </div>
  );
};

export default HeroSection;