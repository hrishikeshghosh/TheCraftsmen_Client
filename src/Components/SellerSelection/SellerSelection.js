/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from 'react';
import './sellerSelection.scss';
const SellerSelection = ({ setOpen }) => {
  const ref = useRef(null);
  useEffect(() => {
    document.addEventListener('keydown', handleEscape, true);
    document.addEventListener('click', handleOutsideClick, true);
  }, []);

  const handleOutsideClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) setOpen(false);
  };

  const handleEscape = (e) => {
    if (e.key === 'Escape') setOpen(false);
  };

  return (
    <div className='seller-selection-zone'>
      <div className='ssz-box' ref={ref}>
        <h2>What do you aspire?</h2>
        <div className='ssz-content-box'>
          <div className='seller-select'>
            <div className='ssr-headings'>
              <i class='fas fa-store'></i>
              <h4>Become a Craftsmen Seller</h4>
            </div>
            <div className='selector-features'>
              <i class='fas fa-check-double'></i>
              <p>Make Your Business online.</p>
            </div>
            <div className='selector-features'>
              <i class='fas fa-check-double'></i>
              <p>Engage yourself with a larger audience set</p>
            </div>
            <div className='selector-features'>
              <i class='fas fa-check-double'></i>
              <p>
                Free volunteer support and Hustle free product transportation
              </p>
            </div>
            <button>Join us!</button>
          </div>

          <div className='volunteer-select'>
            <div className='ssr-headings'>
              <i class='fas fa-hands-helping'></i>
              <h4>Become a Volunteer</h4>
            </div>
            <div className='selector-features'>
              <i class='fas fa-check-double'></i>
              <p>Be the connection between artisans and the audience</p>
            </div>
            <div className='selector-features'>
              <i class='fas fa-check-double'></i>
              <p>Help grow culture and heritage </p>
            </div>
            <div className='selector-features'>
              <i class='fas fa-check-double'></i>
              <p>Make Your own tourism company with us</p>
            </div>
            <button>Join us!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerSelection;
