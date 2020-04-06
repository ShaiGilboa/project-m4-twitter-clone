import React from 'react';
import styled from 'styled-components';
import TweetActionIcon from './TweetActionIcon';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

import UnstyledButton from '../UnstyledButton';

const Action = ({ color, size, handle, kind, children, sum, loggedOn }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [loggedOnModal, setLoggedOnModal] = React.useState(false);
  return (
    <Wrapper
      onClick={loggedOn?(event) => handle(event, kind):null}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      circleColor={color}
      style={{ width: size, height: size, color: isHovered ? color : null }}
    >
      <Sum vis={sum>0?true:false}>
      {/* {sum} */}
      {sum>0?sum:null}
      </Sum>
      {children?children:<TweetActionIcon kind={kind} />}
    </Wrapper>
  );
};

const Wrapper = styled(UnstyledButton)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    opacity: 0;
    background-color: ${p => p.circleColor};
  }

  &:focus:after,
  &:hover:after {
    opacity: 0.12;
  }
`;

const Sum = styled.div`
  display:inline;
  position: relative;
  visibility: ${props=>props.vis?'visible':'hidden'}
  /* left: -1rem; */
  z-index:1;
`;

export default Action;
