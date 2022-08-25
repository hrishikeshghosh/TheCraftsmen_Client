/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import GuideMap from '../GuideMap/GuideMap';
import { Rating } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './guides.css';
import Confirmation from '../Confirmation/Confirmation';

const Guides = (props) => {
  const navigate = useNavigate();
  const [openConfirm, setOpenConfirm] = useState(false);

  const handleGotoBooking = (e, id) => {
    e.preventDefault();
    navigate(`/view-tour/${id}`);
  };

  return (
    <div className='guides-root'>
      <div className='guide-left'>
        <div className='g-images'>
          <img src='https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dGFqJTIwbWFoYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60' />
          <p>{props.title}</p>
        </div>
        <div className='g-details'>
          <GuideMap />
          <h4>{props.title}</h4>
          <p>
            Guided by <span>{props.guide}</span>
          </p>
          <p>
            <i className='fas fa-plane-departure'></i> Refer to the map for the
            places you maye visit in the regional tour.
          </p>
          <Rating
            name='half-rating'
            defaultValue={props.rating}
            precision={0.5}
            style={{ color: '#134e5e', fontSize: '1.2rem' }}
            readOnly
          />
        </div>
      </div>
      <div className='guide-right'>
        {!props.booked ? (
          <>
            {' '}
            <h4>&#8377; {props.price}</h4>
            <p>+ &#8377; 440 tax & fees </p>
            <button onClick={(e) => handleGotoBooking(e, props.id)}>
              Book Tour
            </button>
          </>
        ) : (
          <>
            {' '}
            <img src='https://res.cloudinary.com/dwtjde0mg/image/upload/v1660974985/800px_COLOURBOX7561189-removebg-preview_1_fbwkq8.png' />
            <button
              onClick={() => {
                if (props.booked) setOpenConfirm(true);
              }}>
              View Details
            </button>
          </>
        )}
      </div>
      {openConfirm && (
        <Confirmation
          setOpen={setOpenConfirm}
          details={{ stat: true, id: 1233 }}
        />
      )}
    </div>
  );
};

export default Guides;
