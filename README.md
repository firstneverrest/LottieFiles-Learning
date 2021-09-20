# LottieFiles Learning

LottieFiles provides both free and paid animation for web and mobile application. [Visit official website for more information](https://lottiefiles.com/)

## Installation and Usage by CDN

1. You need to sign in to get Lottie Animation URL in each animation.
2. Find wanted animation in [official website](https://lottiefiles.com/featured).
3. Copy Lottie Animation URL.
4. Open [LottieFiles Web Player](https://lottiefiles.com/web-player) and paste URL in "YOUR LOTTIE JSON URL" input form to auto generate code
5. Copy code and paste in HTML page

## Installation and Usage in React by package manager

From: [lottie web airbnb](https://airbnb.io/lottie/#/web)

### Lottie Web

1. install via npm

```
npm install --save lottie-web
```

2. find lottiefiles animation and download Lottie JSON file
3. add code below

```js
// LottieWeb
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
      <div ref={container} style={{ width: 500 }}></div>
    </div>
  );
};

export default LottieWeb;
```

### react-lottie

From: [react-lottie github](https://github.com/chenqingspring/react-lottie)

1. install via npm

```
npm install --save react-lottie
```

2. find lottiefiles animation and download Lottie JSON file
3. add code below

```js
// ReactLottie.js
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
```
