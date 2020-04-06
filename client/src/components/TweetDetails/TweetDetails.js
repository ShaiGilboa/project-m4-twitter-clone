import React from 'react';
import styled from 'styled-components'
import { useParams } from 'react-router-dom';
import { COLORS } from '../../data/constants';

import { CurrentUserContext } from '../CurrentUserContext';
import { BigTweet } from '../Tweet';
import { LoadingSpinner } from '../Loading';
import { ErrorPage } from '../Error';


const TweetDetails = () => {
  const { tweetId } = useParams();
  const {
    currentUserState:{
      currentUserHomeFeed,
      status,
    },
    currentUserAction: {
    toggleLikeTweet,
    toggleRetweet,
    setStatus,
  }
  } = React.useContext(CurrentUserContext);
  let [thisTweet, setThisTweet] = React.useState({});

  React.useEffect(()=>{
    if(currentUserHomeFeed) {      
      setThisTweet(currentUserHomeFeed.tweetsById[tweetId]);
    } else {
      fetch(`/api/tweet/${tweetId}`)
        .then(res=>res.json())
        .then(res=>{
          setThisTweet(res.tweet);
          })
        .catch(err=>setStatus('error'))
    }
  },[])

  if(status!=='idle')console.log('hi',status);
  
  return (
    (status==='idle' ? <Wrapper>
      {(thisTweet.id) ? <BigTweet 
        id={thisTweet.id}
        author={thisTweet.author}
        retweetFrom={thisTweet.retweetFrom}
        timestamp={thisTweet.timestamp}
        isLiked={thisTweet.isLiked}
        isRetweeted={thisTweet.isRetweeted}
        numLikes={thisTweet.numLikes}
        numRetweets={thisTweet.numRetweets}
        tweetStatus={thisTweet.status}
        media={thisTweet.media}
        toggleLikeTweet={toggleLikeTweet}
        toggleRetweet={toggleRetweet}
      /> : 
      <div style={{width: 'fit-content', height: 'fit-content', margin: 'auto'}}>
      <LoadingSpinner size={'big'} color={COLORS.primaryLight}/>
      </div>}
    </Wrapper> : <>tweet details<ErrorPage /></>
    )
  )
}

const Wrapper = styled.div`
  /* flex:2; */
  width:70vw;
  justify-content: center;
`;

export default TweetDetails;