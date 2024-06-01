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
  '/Photos/photo1.jpg',
  '/Photos/photo2.jpg',
  '/Photos/photo3.jpg',
  '/Photos/photo4.jpg',
  '/Photos/photo5.jpg',
  '/Photos/photo6.jpg',
  '/Photos/photo7.jpg',
  '/Photos/photo8.jpg',
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