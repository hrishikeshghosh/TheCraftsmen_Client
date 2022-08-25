import React from 'react';
import './style.scss';
import data from './data.json';

const VirtualTour = () => {
  return (
    <div className='virtual-tour-wrapper'>
      <h2>Virtual Tour</h2>
      <div className='virtual-tour-container'>
        {data.map((ele) => {
          return (
            <div
              className='virtual-card'
              style={{
                backgroundImage: `url(${ele.img})`,
              }}
              onClick={() => {
                window.location.href = '/virtual-tour/' + ele.link;
              }}>
              <div className='virtual-details'>
                <h3 id='title'>{ele.name}</h3>
                <h3>{ele.location}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VirtualTour;
