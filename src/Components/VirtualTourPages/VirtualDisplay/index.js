import React from 'react';
import './style.scss';
import data from '../data.json';

const VirtualDisplay = () => {
  return data.map((ele) => {
    if (window.location.href.includes(ele.link))
      return (
        <div className='virtual-display-wrapper' key={ele.link}>
          <iframe
            title='map'
            src={ele.source}
            width='100%'
            style={{ border: 0, height: '80vh' }}
            allowFullScreen=''
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'></iframe>
        </div>
      );
  });
};

export default VirtualDisplay;
