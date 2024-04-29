import React from 'react';
import './FrontView.css';
import logo from '../../Assets/Astrix Logo.png';
import tile1 from '../../Assets/tile1.png';
import tile2 from '../../Assets/tile2.png';
import tile3 from '../../Assets/tile3.png';
import tile4 from '../../Assets/tile4.png';
import tile5 from '../../Assets/tile5.png';
import tile6 from '../../Assets/tile6.png';
import tile7 from '../../Assets/tile7.png';
import tile8 from '../../Assets/tile8.png';

const Fronteview = () => {
  return (
    <div className="Fronteview">
      <div className="logoContainer">
        <img src={logo} alt="Logo" />
      </div>
      <div className="Frontline">
        <span>
          we
          <img className='img' src={tile1} alt="Tile 1" />
          ORGANIZE THE CONNECTION
          <img className='img' src={tile2} alt="Tile 2" />
          <br />
          <img className='img2' src={tile3} alt="Tile 3" />
          BETWEEN
          <img className='imgS' src={tile4} alt="Tile 4" />
          MUSIC
          <br />
          ARTIST
          <img className='img' src={tile5} alt="Tile 5" />
          CULTURE
          <img className='img2' src={tile6} alt="Tile 6" />
          <br />
          <img className='img' src={tile7} alt="Tile 7" />
          ART
          <img className='imgS' src={tile8} alt="Tile 8" />
          & COLLECTIONS
        </span>
      </div>
    </div>
  );
};

export default Fronteview;
