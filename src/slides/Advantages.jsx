import React, { useState } from 'react';

import closebtn from '../img/thirdslide/advantages/closebtn.png';
import arrowbtn from '../img/thirdslide/advantages/arrowbtn.png';
import pageindicator from '../img/thirdslide/advantages/pageindicator.png';

const pageContent = {
  1: [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    'Faucibus pulvinar elementum integer enim',
    'Faucibus pulvinar elementum integer enim',
  ],
  2: [
    'Mi bibendum neque egestas congue quisque egestas diam',
    'Venenatis lectus magna fringilla urna',
    'Venenatis lectus magna fringilla urna',
  ],
};

const Advantages = ({ setPageOpen }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageIndicatorStyle = currentPage === 2 ? { transform: 'scale(-1, 1)' } : null;

  const renderAdvList = (pageNum) => pageContent[pageNum]
    .map((el, i) => (
      <div key={i + 1}>
        <span className="item-number">{`0${i + 1}`}</span>
        <p>{el}</p>
      </div>
    ));

  return (
    <div className="background-dark">
      <div className="advantage-box">
        <h3 className="title">преимущества</h3>
        <section className="adv-list">
          {renderAdvList(currentPage)}
        </section>
        <div className="button-box">
          <button className="btn btn-left" onClick={() => setCurrentPage(1)}>
            <img src={arrowbtn} alt="left button" />
          </button>
          <img
            src={pageindicator}
            alt="page indicator"
            style={pageIndicatorStyle}
          />
          <button className="btn btn-right" onClick={() => setCurrentPage(2)}>
            <img src={arrowbtn} alt="right button" />
          </button>
        </div>
        <button className="btn btn-close" onClick={() => setPageOpen('keymessage')}>
          <img src={closebtn} alt="close" />
        </button>
      </div>
    </div>
  );
};

export default Advantages;
