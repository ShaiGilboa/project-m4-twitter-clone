import React from 'react';
import styled from 'styled-components'
import { useParams } from 'react-router-dom';

import { CurrentUserContext } from '../CurrentUserContext';
import { BigTweet } from '../Tweet';

const TweetDetails = () => {
  const { tweetId } = useParams();
  const {
    // currentUserState: {
    //   currentUserHomeFeed: {
    //     tweetsById,
    //   },
    //   status,
    //   // },
    // },
    currentUserState:{
      currentUserHomeFeed,
      status,
    },
    currentUserAction: {
    toggleLikeTweet,
    toggleRetweet,
  }
  } = React.useContext(CurrentUserContext);
  // const status=currentUserState.status;
  let [thisTweet, setThisTweet] = React.useState(null);
  let [liked, setLiked] = React.useState(false)

  React.useEffect(()=> {
    setThisTweet(null);
    // setThisTweet(currentUserHomeFeed.tweetsById[tweetId]);
    console.log('tweetDetails useEffect');
    
  },[])

  if(!currentUserHomeFeed===null) {
    setThisTweet(currentUserHomeFeed.tweetsById[tweetId]);
    console.log('if');
    
  } else {
    // React.useEffect(() => {
      fetch(`/api/tweet/${tweetId}`)
        .then(res=>res.json())
        .then(res=>{
          console.log('getch');
          setThisTweet(res.tweet);
          })
    // },[status])
  }
  // console.log('thisTweetOutside', thisTweet)
  // console.log('tweetsByIds', tweetsById);
  console.log('tweetDetails');
  
  return (
    <Wrapper>
      {(thisTweet && status==='idle') ? <BigTweet 
        id={thisTweet.id}
        author={thisTweet.author}
        retweetFrom={thisTweet.retweetFrom}
        timestamp={thisTweet.timestamp}
        isLiked={thisTweet.isLiked}
        isRetweeted={thisTweet.isRetweeted}
        numLikes={thisTweet.numLikes}
        numRetweets={thisTweet.numRetweets}
        status={thisTweet.status}
        media={thisTweet.media}
        toggleLikeTweet={toggleLikeTweet}
        toggleRetweet={toggleRetweet}
      /> : 
      <div>loading</div>}
    </Wrapper>
    )
}

const Wrapper = styled.div`
  flex:2;
`;

export default TweetDetails;