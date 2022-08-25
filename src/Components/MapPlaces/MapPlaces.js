import React from 'react';
import './mapplaces.css';
const MapPlaces = ({
  img,
  place,
  coordinates,
  top,
  left,
  invert,
  mobileDisplay,
}) => {
  if (invert) {
    return (
      <div
        className='places-root'
        style={{ position: 'absolute', left: `${left}%`, top: `${top}%` }}>
        <div className='places-content'>
          <div className='places-img-container c-up' title={place}>
            <img src={img} alt={'places-img'} />
          </div>
          <div className='places-details'>
            <h2>{place}</h2>
            <p>{coordinates}</p>
          </div>
        </div>
        <div className='place-pin'></div>
      </div>
    );
  } else {
    return (
      <div
        className='places-root'
        style={{ position: 'absolute', left: `${left}%`, top: `${top}%` }}>
        <div className='place-pin'></div>
        <div className='places-content'>
          <div className='places-img-container c-down' title={place}>
            <img src={img} alt={'places-img'} />
          </div>
          <div className='places-details'>
            <h2>{place}</h2>
            <p>{coordinates}</p>
          </div>
        </div>
      </div>
    );
  }
};

export default MapPlaces;
