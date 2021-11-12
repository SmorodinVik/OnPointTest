import React from 'react';

import iconplate from '../img/thirdslide/keymessage/iconplate.png';
import iconcalendar from '../img/thirdslide/keymessage/iconcalendar.png';
import btnabout from '../img/thirdslide/keymessage/btnabout.png';

const Keymessage = ({ setPageOpen }) => (
  <div>
    <div className="keymessage-box">
      <h3 className="title">ключевое сообщение</h3>
      <section className="columns-2">
        <img src={iconplate} alt="plate icon" />
        <p>Ehicula ipsum a arcu cursus vitae. Eu non diam phasellus vestibulum lorem sed risus ultricies</p>
        <img src={iconcalendar} alt="calendar icon" />
        <p>A arcu<br />cursus vitae</p>
      </section>
      <button className="btn btn-about" onClick={() => setPageOpen('advantages')}>
        <img src={btnabout} alt="about" />
      </button>
    </div>
  </div>
);

export default Keymessage;
