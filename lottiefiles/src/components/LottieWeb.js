import React, { useEffect, useRef } from 'react';
import classes from './LottieWeb.module.css';
import lottie from 'lottie-web';

const LottieWeb = () => {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../assets/computer-animation.json'),
    });
  }, []);

  return (
    <div className={classes.container}>
      <h2>Lottie Web</h2>
      <p>Welcome to Lottie Web Animation</p>
      <div ref={container} style={{ width: 300 }}></div>
    </div>
  );
};

export default LottieWeb;
