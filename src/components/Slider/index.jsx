import React from "react";
import Slider from "react-slick";
import './style.css';

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red", zIndex: 1999, height: '5px' }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red", zIndex: 1999,  height: '5px' }}
      onClick={onClick}
    />
  );
}

const images = [
  'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D',
  'https://images.unsplash.com/photo-1681557225327-e4e23744d667?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D',
  'https://images.unsplash.com/photo-1670407476189-bbd4e76b5216?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D',
  'https://images.unsplash.com/photo-1696235084626-d3fe4a3994de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1666613777035-3c2e1ea03b66?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1599764945997-1e62479003fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D',
  'https://images.unsplash.com/photo-1621014260129-c0061e7a9137?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGljdHVyZXxlbnwwfHwwfHx8MA%3D%3D',
  '/Photos/photo9.jpg',
  '/Photos/photo10.jpg',
  '/Photos/photo11.jpg',
  '/Photos/photo12.jpg'
];

function AutoPlay() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3500,
    autoplaySpeed: 50,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <div className="slider-container">
      <h2>Your upcoming events</h2>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <div className="event-box" style={{ backgroundImage: `url(${image})` }}>
              <a href="/event" className="view-event-button">View event</a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default AutoPlay;