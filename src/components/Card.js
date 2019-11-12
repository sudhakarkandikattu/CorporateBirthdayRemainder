import React from 'react';
import logo from './logo.png';
const Card = ({ name, email, id, dob }) => {
  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      <img src={logo} alt='imageneeded' width="200" height="200" />
      <div>
        <h2>{name}</h2>
        <p>{dob}</p>
      </div>
    </div>
  );
}

export default Card;
