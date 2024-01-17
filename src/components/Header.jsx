import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <h1 className='heading mb-4'>Number Guessing Game</h1>
      <h5 className='sub-heading'>
        Click the below button to generate random number between 1 and 10
      </h5>
    </div>
  );
};

export default Header;
