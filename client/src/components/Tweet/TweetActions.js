import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import LikeButton from './Buttons/LikeButton';
import PoppingCircle from './Buttons/PoppingCircle';

import Action from './Buttons/Action';
import TweetActionIcon from './data/TweetActionIcon';

import { CurrentUserContext } from '../CurrentUserContext';

const TweetActions = ({isLiked, isRetweeted, numRetweets, numLikes, id}) => {
  const {
    currentUserState:{
      currentUserHomeFeed,
      status,
    },
    currentUserAction: {
      setStatus,
      toggleLikeTweet,
      toggleRetweet,
    },
  } = React.useContext(CurrentUserContext);

  const handleOnClick = (event, type) => {
    event.stopPropagation();
    // if(CurrentUserProfile===null) {
    //   console.log('not logged on')
    //   return
    // }
    setStatus('tweet-action');
    switch (type){
      case 'like':
        toggleLikeTweet(id);
        fetch(`/api/tweet/${id}/like`, {
          method: "PUT",
          body: JSON.stringify({like: !isLiked}),
          headers: {
            "Content-Type": "application/json",
            "Accept" : "application/json"
        },
        })
        .then(res=>res.json())
        .then(res=>console.log(res))
      break;
      case 'retweet':
      toggleRetweet(id);
        fetch(`/api/tweet/${id}/retweet`, {
          method: "PUT",
          body: JSON.stringify({retweet: !isRetweeted}),
          headers: {
            "Content-Type": "application/json",
            "Accept" : "application/json"
        },
        })
        .then(res=>res.json())
        .then(res=>console.log(res))
      break;
      default:
      console.log(`unknown action: ${type}`);
      setStatus('error');
      break;
    }
  }
  console.log('currentUserState', currentUserHomeFeed===null)
  return (
    <>
    {currentUserHomeFeed ? (
      <Actions>
        <Action
          color="rgb(27, 149, 224)"
          size={40}
          onClick={(event) => handleOnClick(event, 'reply')}
        >
          <TweetActionIcon kind="reply" />
        </Action>

        <Action
          color="rgb(23, 191, 99)"
          size={40}
          onClick={(event)=>handleOnClick(event, 'retweet')}
        >
          <TweetActionIcon
            kind="retweet"
            color={isRetweeted ? 'rgb(23, 191, 99)' : undefined}
          />
          {numRetweets > 0 ? numRetweets : null}
        </Action>

        <Action
          color="rgb(224, 36, 94)"
          size={40}
          onClick={(event)=>handleOnClick(event, 'like')}>
          <LikeButton isLiked={isLiked} />
          {numLikes > 0 ? numLikes : null}
        </Action>

        <Action
          color="rgb(27, 149, 224)"
          size={40}
          onClick={(event) => handleOnClick(event, 'share')}
        >
          <TweetActionIcon kind="share" />
        </Action>
      </Actions>
    ) : <>
      <Link to='/' >
        you are not logged in, do you wish to log in?
      </Link>
      </>}
    </>
  );
}

const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 2.5rem;
`;

export default TweetActions;