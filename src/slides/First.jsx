import React, { useState } from "react";

import nextbtn from '../img/firstslide/nextbtn.png';
import pinksperm1 from '../img/firstslide/pinksperm1.png';
import pinksperm2 from '../img/firstslide/pinksperm2.png';
import bakt1 from '../img/firstslide/bakt1.png';
import bakt2 from '../img/firstslide/bakt2.png';
import bakt3 from '../img/firstslide/bakt3.png';
import bakt4 from '../img/firstslide/bakt4.png';
import bakt5 from '../img/firstslide/bakt5.png';
import bakt6 from '../img/firstslide/bakt6.png';
import baktbigbottom from '../img/firstslide/baktbigbottom.png';

const First = () => {
  return (
    <div className="slide slide-1">
      <div className="title">
        <h3 className="greeting">привет,</h3>
        <h1>это <strong>не</strong> коммерческое задание</h1>
      </div>
      <button className="btn btn-next"><img src={nextbtn} alt="next page" /></button>

      <img src={pinksperm1} className="pink-sperm-1" />
      <img src={pinksperm2} className="pink-sperm-2" />
      <img src={bakt1} className="bakt-1" />
      <img src={bakt2} className="bakt-2" />
      <img src={bakt3} className="bakt-3" />
      <img src={bakt4} className="bakt-4" />
      <img src={bakt5} className="bakt-5" />
      <img src={bakt6} className="bakt-6" />
      <img src={baktbigbottom} className="bakt-big" />
    </div>
  );
};

export default First;