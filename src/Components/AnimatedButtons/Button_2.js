/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './button.css';
const Button2 = ({ handleClick }) => {
  return (
    <div className='button-2-root'>
      <a href={null} onClick={() => handleClick()}>
        Explore now
      </a>
    </div>
  );
};

export default Button2;
