import React from 'react';
import classes from './ReactLottie.module.css';
import Lottie from 'react-lottie';
import * as computer from '../assets/computer-animation.json';

const ReactLottie = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: computer.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className={classes.container}>
      <h2>React Lottie</h2>
      <p>Welcome to React Lottie Animation</p>
      <div style={{ width: 300 }}>
        <Lottie options={defaultOptions} />
      </div>
    </div>
  );
};

export default ReactLottie;
