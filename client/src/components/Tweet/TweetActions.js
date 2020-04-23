import React from 'react';
import styled from 'styled-components';

import LikeButton from './Buttons/LikeButton';

import Action from './Buttons/Action';

import { CurrentUserContext } from '../CurrentUserContext';

const TweetActions = ({isLiked, isRetweeted, numRetweets, numLikes, id}) => {
  const {
    currentUserState:{
      currentUserState,
      currentUserHomeFeed,
      status,
    },
    currentUserAction: {
      setStatus,
      toggleLikeTweet,
      toggleRetweet,
    },
  } = React.useContext(CurrentUserContext);

  const [liked, setLiked] = React.useState(isLiked);
  const [numOfLikes , setNumOfLikes] = React.useState(numLikes);
  const [retweet, setRetweet] = React.useState(isRetweeted);
  const [numOfRetweets , setNumOfRetweets] = React.useState(numRetweets);

  const handleOnClick = (event, type) => {
    event.stopPropagation();
    setStatus('tweet-action');    
    switch (type){
      case 'like':
        setNumOfLikes(liked?numOfLikes-1:numOfLikes+1);
        setLiked(!liked);
        toggleLikeTweet(id);        
        fetch(`/api/tweet/${id}/like`, {
          method: "PUT",
          body: JSON.stringify({like: !liked}),
          headers: {
            "Content-Type": "application/json",
            "Accept" : "application/json"
        },
        })
        .then(res=>res.json())
        .catch(err=>{console.log('error while liking, please refresh');
        setStatus('error-tweet-action')
        })
      break;
      case 'retweet':
        setNumOfRetweets(retweet?numOfRetweets-1:numOfRetweets+1);
        setRetweet(!retweet);
        toggleRetweet(id);
        fetch(`/api/tweet/${id}/retweet`, {
          method: "PUT",
          body: JSON.stringify({retweet: !retweet}),
          headers: {
            "Content-Type": "application/json",
            "Accept" : "application/json"
        },
        })
        .then(res=>res.json())
        .catch(err=>{console.log('error while retweeting, please refresh');
        setStatus('error-tweet-action');
        })
      break;
      default:
      console.log(`unknown action: ${type}`);
      // setStatus('error');
      break;
    }
  }
  const loggedOn = currentUserHomeFeed ? true : false;

  return (
    <>
      <Actions>
        <Action
          color="rgb(27, 149, 224)"
          size={40}
          handle={handleOnClick}
          kind={'reply'}
          loggedOn={loggedOn}
        />

        <Action
          color="rgb(23, 191, 99)"
          size={40}
          handle={handleOnClick}
          kind={'retweet'}
          sum={numOfRetweets}
          loggedOn={loggedOn}
        >
        {/* <RetweetButton isRetweeted={isRetweeted}/> */}
        </Action>

        <Action
          color="rgb(224, 36, 94)"
          size={40}
          handle={handleOnClick}
          kind={'like'}
          sum={numOfLikes}
          loggedOn={loggedOn}
        >
        <LikeButton isLiked={liked} />
        </Action>

        <Action
          color="rgb(27, 149, 224)"
          size={40}
          handle={handleOnClick}
          kind={'share'}
          loggedOn={loggedOn}
        />
      </Actions>
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