import React, { useState } from 'react';

import First from './slides/First.jsx';
import Second from './slides/Second.jsx';
import Third from './slides/Third.jsx';

import logo from './img/logo.png';
import homebtn from './img/homebtn.png';

const App = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);

  const slideMaxIndex = 2;
  const slideWidth = 1024;
  const posThreshold = 100;

  const setSlide = (slideIndex) => () => {
    setCurrentSlideIndex(slideIndex);
    setCurrentX(slideIndex * -slideWidth);
  };

  const handleSwipeStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleSwipeMove = (e) => {
    const x = currentX - (startX - e.touches[0].clientX);
    if (currentSlideIndex === 0 && x > 0 || currentSlideIndex === slideMaxIndex && x < -slideWidth) {
      return;
    }
    setCurrentX(x);
  };

  const handleSwipeEnd = (e) => {
    const finalX = e.changedTouches[0].clientX;

    let nextSlideIndex;
  
    if (Math.abs(startX - finalX) > posThreshold) {
      if (startX > finalX) {
        nextSlideIndex = currentSlideIndex < slideMaxIndex ? currentSlideIndex + 1 : currentSlideIndex;
      } else {
        nextSlideIndex = currentSlideIndex === 0 ? currentSlideIndex : currentSlideIndex - 1;
      }
      setCurrentSlideIndex(nextSlideIndex);
    }
    setCurrentX(nextSlideIndex * -slideWidth);
  };

  return (
    <div className="slider-coll">
      <div
        className="slides" 
        onTouchMove={handleSwipeMove}
        onTouchStart={handleSwipeStart}
        onTouchEnd={handleSwipeEnd}
        style={{ transform: `translate(${currentX}px, 0)`}}
      >
        <First setSlide={setSlide} />
        <Second />
        <Third />
      </div>
      <img src={logo} alt="logo" className="logo" />
      <button className="btn btn-home" onClick={setSlide(0)}><img src={homebtn} alt="home button" /></button>
    </div>
  );
};

export default App;
