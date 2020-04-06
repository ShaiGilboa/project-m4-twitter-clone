import React from 'react';
import styled from 'styled-components';
import {TweetErrorIcon, ErrorIcon} from '../../data/ProjectIcons';

const ComposingTweetError = ({meow}) => {
  return (
    <Wrapper>
      <ErrorIcon />
      <TweetErrorIcon />
      <h2>there has been an error posting your tweet: {meow}, please try again.</h2>
    </Wrapper>
  )
}

export default ComposingTweetError;

const Wrapper = styled.div`
  justify-content:center;
  align-items:center;
  flex-direction:column;
`;