import React from 'react';
import styled from 'styled-components';

import LikeButton from './Buttons/LikeButton';
import PoppingCircle from './Buttons/PoppingCircle';

import Action from './Buttons/Action';
import TweetActionIcon from './data/TweetActionIcon';

const TweetActions = ({isLiked, isRetweeted}) => {
  return (
    <Actions>
      <Action
        color="rgb(27, 149, 224)"
        size={40}
        onClick={() => {
        }}
      >
        <TweetActionIcon kind="reply" />
      </Action>
      <Action
        color="rgb(23, 191, 99)"
        size={40}
        onClick={()=>console.log('retweet')}
      >
        <TweetActionIcon
          kind="retweet"
          color={isRetweeted ? 'rgb(23, 191, 99)' : undefined}
        />
      </Action>
      <Action color="rgb(224, 36, 94)" size={40} onClick={()=>console.log('like')}>
        <LikeButton isLiked={isLiked} />
      </Action>
      <Action
        color="rgb(27, 149, 224)"
        size={40}
        onClick={() => {
        }}
      >
        <TweetActionIcon kind="share" />
      </Action>
    </Actions>
  );
}

const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 48px;
`;

export default TweetActions;