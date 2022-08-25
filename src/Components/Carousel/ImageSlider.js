import React, { useState } from 'react';
import { SliderData } from './SliderData';
import './imageslider.css';

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <div className='slider'>
      <i
        className='fas fa-angle-left arrow-left'
        onClick={() => prevSlide()}></i>
      <i
        className='fas fa-angle-right arrow-right'
        onClick={() => nextSlide()}></i>
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}>
            {index === current && (
              <>
                <img src={slide.img} alt='asdsd' className='slider-img' />
                <p>"{slide.title}"</p>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ImageSlider;
