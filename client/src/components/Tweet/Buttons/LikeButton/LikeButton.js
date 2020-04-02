import React from 'react';
import styled from 'styled-components';

import Heart from './Heart';
import PoppingCircle from '../PoppingCircle';
import ScaleIn from '../ScaleIn';
import Particles from '../Particles';

const LikeButton = ({ isLiked, size = 40 }) => {
  const heartSize = size * 0.6;

  return (
    <Wrapper style={{ width: size, height: size }}>
      {isLiked ? (
        <>
          <PoppingCircle size={size} color={'#E790F7'} />
          <ScaleIn>
            <Heart width={heartSize} isToggled={isLiked} />
          </ScaleIn>
          <Particles />
        </>) :
        <Heart width={heartSize} isToggled={isLiked} />
      } 
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default LikeButton;
