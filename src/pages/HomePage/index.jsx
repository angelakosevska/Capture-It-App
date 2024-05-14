
import SecondaryButton from "../../components/Buttons/SecondaryButton";
import "./style.css";
import { Link } from "react-router-dom";
export function Home() {
  return (
    <>
    
      <div>Events preview</div>
      <Link to="/event">Event 1</Link>

      <SecondaryButton
      buttonText={"Probno"}
      buttonWidth={"100px"}
      buttonHeight={"40px"}
      buttonColor={"#FF7E4F"}
      />
    </>
  );
}

export default Home;
/*
import Layout from "../../UI/Layout";
import React, { useState } from 'react';
import "./style.css";
import { Link } from "react-router-dom";
import Routing from "../../components/Routing";
const Home = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const openGallery = (images) => {
    setSelectedPost(images);
  };

  const closeGallery = () => {
    setSelectedPost(null);
  }

  return (
    <>
      <div>
        <HeroImage />
        {selectedPost && <PopupGallery images={selectedPost} onClose={closeGallery} />}
      </div>
    </>
  );
};

const HeroImage = () => {
  const [buttonText, setButtonText] = useState('Get Started');

  const handleClick = () => {
    if (buttonText === 'Get Started') {
      setButtonText('Create Event');
      // Redirect to create event page
    } else {
      // Redirect to create event page
    }
  };

  return (
    <div className="hero-image">
      <div className="hero-content">
        <h1>Welcome to CaptureIt</h1>
        <p>Share your best moments with your friends and family</p>
        <button onClick={handleClick}>{buttonText}</button>
      </div>
    </div>
  );
};

const PopupGallery = ({ images, onClose }) => {
  return (
    <div className="popup-gallery">
      <button onClick={onClose} className="close-button">Close</button>
      <div className="gallery-images">
        {images.map((image, index) => (
          <img key={index} src={image} alt={Image ${index + 1}} />
        ))}
      </div>
    </div>
  );
};

export default Home;*/