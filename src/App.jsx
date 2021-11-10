//@ts-check

import React, { useState } from "react";

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [startX, setStartX] = useState(null);
  const [moveX, setMoveX] = useState(null);
  const [currentX, setCurrentX] = useState(0);
  
  const slideCount = 2;
  const posThreshold = 250;
  const slideWidth = 1024;
  
  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };
  
  const handleTouchMove = (e) => {
    setMoveX(e.touches[0].clientX);

    const x = currentSlide * -slideWidth - (startX - moveX);
  
    setCurrentX(x);
  };

  const handleTouchEnd = () => {
    if (Math.abs(startX - moveX) > posThreshold) {
      if (startX > moveX) {
        const nextSlide = currentSlide < slideCount ? currentSlide + 1 : currentSlide;
        setCurrentSlide(nextSlide);
      } else {
        const nextSlide = currentSlide === 0 ? currentSlide : currentSlide - 1;
        setCurrentSlide(nextSlide);
      }
    }
    setCurrentX(-slideWidth * currentSlide);
    setStartX(null);
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
        <div className="slide slide-1"></div>
        <div className="slide slide-2">2</div>
        <div className="slide slide-3">3</div>
      </div>
      <img src="./img/logo.png" alt="logo" className="logo" />
    </div>
  );
};

export default App;
