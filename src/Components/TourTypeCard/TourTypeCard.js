import React from 'react';
import './tourtypecard.css';
import Button2 from '../AnimatedButtons/Button_2';
import { animated, useSpring } from 'react-spring';
import styled from '@emotion/styled';

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 100,
  (x - window.innerWidth / 2) / 100,
  1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const Container = styled(animated.img)`
  width: 50%;
  height: 100%;
  cursor: pointer;
`;

const TourTypeCard = ({ name, title, src, desc, align, handleClick }) => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 10, tension: 200, friction: 50 },
  }));
  // const navigate = useNavigate();
  if (align === 0) {
    return (
      <div className='tourcard-root'>
        <div className='tourcard-img-container'>
          <Container
            src={src}
            alt={'card-img'}
            className='tourcard-img-container'
            onMouseMove={({ clientX: x, clientY: y }) => {
              set({ xys: calc(x, y) });
            }}
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: props.xys.interpolate(trans) }}></Container>
        </div>

        <div className='tour-card-details'>
          <h1>{title}</h1>
          <p>{desc}</p>

          <Button2 handleClick={handleClick} />
        </div>
      </div>
    );
  } else {
    return (
      <div className='tourcard-root'>
        <div className='tour-card-details'>
          <h1>{title}</h1>
          <p>{desc}</p>

          <Button2 handleClick={handleClick} />
        </div>
        <div className='tourcard-img-container'>
          <Container
            src={src}
            alt={'card-img'}
            className='tourcard-img-container'
            onMouseMove={({ clientX: x, clientY: y }) => {
              set({ xys: calc(x, y) });
            }}
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: props.xys.interpolate(trans) }}></Container>
        </div>
      </div>
    );
  }
};

export default TourTypeCard;
