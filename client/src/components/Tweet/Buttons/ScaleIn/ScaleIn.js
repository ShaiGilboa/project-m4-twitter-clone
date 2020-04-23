import React from 'react';
import {useSpring, animated} from 'react-spring';

const ScaleIn = ({children}) => {
  const style = useSpring({
    transform: 'scale(1)',
    from: {
      transform: 'scale(0.8)',
    },
    config: {
      mass: 17,
      tension: 1000,
      friction: 45,
    },
  //   transform: 'scale(1)',
  // from: {
  //   transform: 'scale(0)',
  // },
  // config: {
  //   tension: 200,
  //   friction: 12,
  // },
  })
  const query = '(prefers-reduced-motion: reduce)';
  const mediaQueryList = window.matchMedia(query);
  const shouldReduceMotion = mediaQueryList.matches;
  return (
    <>
      {shouldReduceMotion? <div>{children}</div>:
        <animated.div style={{
          position: 'absolute',
          ...style,
        }}>
          {children}
        </animated.div>
      }
    </>
  )
}

export default ScaleIn;
