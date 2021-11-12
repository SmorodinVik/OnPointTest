import React, { useState } from 'react';

import Keymessage from './Keymessage.jsx';
import Advantages from "./Advantages.jsx";

import bottle from '../img/thirdslide/bottle.png';

const Third = () => {
  const [pageOpen, setPageOpen] = useState('keymessage');

  return (
    <div className="slide">
      <h2 className="brand-name">brend<strong>xy</strong></h2>
      {
        pageOpen === 'keymessage'
        ? <Keymessage setPageOpen={setPageOpen} />
        : <Advantages setPageOpen={setPageOpen} />
      }

      <img src={bottle} className="bottle" alt="spray bottle" />
    </div>
  );
};

export default Third;
