import React, { useState } from "react";

import First from './slides/First.jsx';

import logo from './img/logo.png';
import homebtn from './img/homebtn.png';

const App = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  
  const slideCount = 2;
  const posThreshold = 350;
  const slideWidth = 1024;
  
  const handleTouchStart = (e) => {
    console.log(currentX);
    setStartX(e.touches[0].clientX);
  };
  
  const handleTouchMove = (e) => {
    const x = currentX - (startX - e.touches[0].clientX);
    // console.log(x);
    if (slideIndex === 0 && x > 0 || slideIndex === 2 && x < -slideWidth) {
      return;
    }
    setCurrentX(x);
  };

  const handleTouchEnd = (e) => {
    const finalX = e.changedTouches[0].clientX;
    if (Math.abs(startX - finalX) > posThreshold) {
      if (startX > finalX) {
        const nextSlide = slideIndex < slideCount ? slideIndex + 1 : slideIndex;
        setSlideIndex(nextSlide);
      } else {
        const nextSlide = slideIndex === 0 ? slideIndex : slideIndex - 1;
        setSlideIndex(nextSlide);
      }
    }
    setCurrentX(slideIndex * -slideWidth);
  };

  return (
    <div className="slider-coll">
      <div
        className="slides" 
        onTouchMove={handleTouchMove}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        style={{ transform: `translate3d(${currentX}px, 0, 0)`}}
      >
        <First />
        <div className="slide slide-2">2</div>
        <div className="slide slide-3">3</div>
      </div>
      <img src={logo} alt="logo" className="logo" />
      <button className="btn btn-home"><img src={homebtn} alt="home button" /></button>
    </div>
  );
};

export default App;
