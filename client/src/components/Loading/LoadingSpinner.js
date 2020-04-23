import React from 'react';
import {SmallSpinnerIcon, ErrorIcon} from '../../data/ProjectIcons';
import styled, { keyframes } from 'styled-components';
// import {spinner9} from 'react-icons-kit/icomoon/spinner9';
// import {Icon} from 'react-icons-kit';
import { COLORS } from '../../data/constants';
import { ReactComponent as Loading } from '../../assets/loading.svg'

const LoadingSpinner = ({size, color}) => {
  
  switch (size) {
    case 'small':
      return (
      <RotatingDiv>
      <SmallSpinnerIcon color={color}/>
      </RotatingDiv>
      )
    case 'big':
    return (
      <RotatingDiv>
        <Loading />
      </RotatingDiv>
      )
    default:
    return (
      <RotatingDiv>
      <ErrorIcon color={color}/>
      </RotatingDiv>
      )
  }
}

export default LoadingSpinner;

const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-359deg);
  }
`;

// const StyledIcon = styled(Icon)`
//       animation: ${rotation} 1000ms infinite linear;

// `;

const RotatingDiv = styled.div`
  width:fit-content;
  height:fit-content;
  margin: auto;
  transform: origin(0%);
  color: ${COLORS.primary};
  animation: ${rotation} 1500ms infinite linear;
`;

// const StyledLoading