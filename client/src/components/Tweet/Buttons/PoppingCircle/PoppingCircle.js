import React from 'react';
import styled, { keyframes } from 'styled-components';

const PoppingCircle = ({ size, color }) => {
  const query = '(prefers-reduced-motion: reduce)';
  const mediaQueryList = window.matchMedia(query);
  const shouldReduceMotion = mediaQueryList.matches;
  
  return (
    <>
    {shouldReduceMotion ?
      <StyledCircleReduced color={color} style={{width:`${size}px`, height:`${size}px`, backgroundColor: color}}/> :
      <StyledCircle style={{width:`${size}px`, height:`${size}px`}}/>
    }
    </>
  )
}

const StyledPoppingCircle = keyframes`
  0% {
    opacity: 1;
    transform: scale(0);
    filter: brightness(30%);
  }
  90% {
    transform: scale(1);
    /* background-color:rgb(182, 26, 125) */
  }
  100%{
    opacity: 0;
  }
`;


const StyledCircle = styled.div`
  position: absolute;
  z-index:0;
  /* background-color: rgb(219, 29, 150); */
  border-radius: 20px;
  border: solid .5px rgb(182, 26, 125);
  animation: ${StyledPoppingCircle} 400ms forwards;
`;

const StyledCircleReduced = styled.div`
  position: absolute;
  z-index:0;
  /* background-color: rgb(219, 29, 150); */
  border-radius:20px;
  border: solid .5px rgb(182, 26, 125);
  opacity: 0.4;
`;

export default PoppingCircle;