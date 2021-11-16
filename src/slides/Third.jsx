import React, { useState } from 'react';

import Keymessage from './Keymessage.jsx';
import Advantages from './Advantages.jsx';

import bottle from '../img/thirdslide/bottle.png';
import bubble1 from '../img/thirdslide/bubble1.png';
import bubble2 from '../img/thirdslide/bubble2.png';
import bubble3 from '../img/thirdslide/bubble3.png';
import bubble4 from '../img/thirdslide/bubble4.png';
import bubble5 from '../img/thirdslide/bubble5.png';
import bubble6 from '../img/thirdslide/bubble6.png';
import bubble7 from '../img/thirdslide/bubble7.png';
import bubble8 from '../img/thirdslide/bubble8.png';

const Third = () => {
  const [pageOpen, setPageOpen] = useState('keymessage');

  return (
    <div className="slide">
      <h2 className="brand-name">brand<strong>xy</strong></h2>
      {
        pageOpen === 'keymessage'
        ? <Keymessage setPageOpen={setPageOpen} />
        : <Advantages setPageOpen={setPageOpen} />
      }

      <img src={bottle} className="bottle" alt="spray bottle" />
      <img src={bubble1} className="bubble-1" alt="bubble" />
      <img src={bubble2} className="bubble-2" alt="bubble" />
      <img src={bubble3} className="bubble-3" alt="bubble" />
      <img src={bubble4} className="bubble-4" alt="bubble" />
      <img src={bubble5} className="bubble-5" alt="bubble" />
      <img src={bubble6} className="bubble-6" alt="bubble" />
      <img src={bubble7} className="bubble-7" alt="bubble" />
      <img src={bubble8} className="bubble-8" alt="bubble" />

    </div>
  );
};

export default Third;
