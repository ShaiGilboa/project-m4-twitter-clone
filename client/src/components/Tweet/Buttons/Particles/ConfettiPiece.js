import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useSpring, animated } from 'react-spring'


const ConfettiPiece = ({ angle, color, distance, size, burst }) => {
  const convertDegreesToRadians = angle => (angle * Math.PI) / 180;

  const angleInRads = convertDegreesToRadians(angle);

  const xEnd = Math.cos(angleInRads) * distance;
  const yEnd = Math.sin(angleInRads) * distance;
  const xStart = Math.cos(angleInRads) * (distance / 4);
  const yStart = Math.sin(angleInRads) * (distance / 4);

  const query = '(prefers-reduced-motion: reduce)';
  const mediaQueryList = window.matchMedia(query);
  const shouldReduceMotion = mediaQueryList.matches;

  const style1 = useSpring({
    transform: `translate(${xEnd}px, ${yEnd}px)`,
    opacity: 0,
    backgroundColor: color.end,
    from: {
      backgroundColor: color.start,
      opacity: 1,
      transform: `translate(${xStart}px, ${yStart}px)`
    },
    delay: burst? 200: 0,
    immediate: shouldReduceMotion,
  })
  
  return(
    <>
    { 
    shouldReduceMotion? null : 
    (
      // burst?
      // ( 
        <StyledConfettiPiece style={{
        
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: `${size}px`,
        ...style1,
        }}>
      </StyledConfettiPiece>
      ) 
    //   :
    //   (
    //   <StyledConfettiPiece2
    //     xend={xEnd}
    //     yend={yEnd}
    //     xstart={xStart}
    //     ystart={yStart}
    //     colorstart={color.start}
    //     colorend={color.end}
    //     style={{
    //     backgroundColor: color,
    //     width: `${size}px`,
    //     height: `${size}px`,
    //     borderRadius: `${size}px`,
    //     }}>
    //   </StyledConfettiPiece2>
    //   )
    //   )
    }
    </>
  )
}

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100%{
    opacity: 0;
  }
`;

const StyledConfettiPiece = styled(animated.div)`
  position: absolute;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${fadeOut} 1000ms;
  }
`;

const fadeOut2 = (xstart, ystart, xend, yend, colorstart, colorend) => keyframes`
  0% {
    opacity: 0;
    transform: translate(${xstart}px, ${ystart}px);
    background-color: ${colorstart};
  }
  29%{
    opacity: 0;
    transform: translate(${xstart}px, ${ystart}px);
    background-color: ${colorstart};
  }
  30% {
    transform: translate(${ystart}px, ${ystart}px);
    opacity: 1;
    background-color: ${colorstart};
  }
  100%{
    transform: translate(${xend}px, ${yend}px);
    opacity: 0;
    background-color: ${colorend};
  }
`;

const StyledConfettiPiece2 = styled(animated.div)`
  position: absolute;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${props => fadeOut2(props.xstart, props.ystart, props.xend, props.yend, props.colorstart, props.colorend)} 1000ms forwards;
  }
`;

export default ConfettiPiece;