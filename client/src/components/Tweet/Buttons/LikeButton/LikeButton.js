import React from 'react';
import styled from 'styled-components';

import Heart from './Heart';
import ScaleIn from '../ScaleIn';

const LikeButton = ({ isLiked, size = 40 }) => {
  const heartSize = size * 0.6;
  // const [likeAnimation, setLikeAnimation] = React.useState(false)
  // React.useEffect(() => {
  //   setLikeAnimation(!likeAnimation);
  // },[isLiked])
  return (
    <Wrapper style={{ width: size, height: size }}>
      {isLiked ? (
        <>
          <ScaleIn>
            <Heart width={heartSize} isToggled={isLiked} />
          </ScaleIn>
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
