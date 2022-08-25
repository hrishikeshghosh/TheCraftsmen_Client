import React from 'react';
import { useNavigate } from 'react-router-dom';
import './confirm.scss';
const Confirmation = ({ setOpen, orderID }) => {
  const navigate = useNavigate();
  return (
    <div className='confrimation-root'>
      <div className='confirm-box'>
        <img
          src='https://res.cloudinary.com/dwtjde0mg/image/upload/v1660978168/sammy-shopping_pelu7m.gif'
          alt=''
        />
        <h1>Booking Confirmed!</h1>
        <p>Your Booking ID: </p>
        <p>
          See your order details <span>here</span>
        </p>
        <button
          onClick={() => {
            setOpen(false);
            navigate('/', { replace: true });
          }}>
          Return to Home
        </button>
      </div>
    </div>
  );
};

export default Confirmation;
