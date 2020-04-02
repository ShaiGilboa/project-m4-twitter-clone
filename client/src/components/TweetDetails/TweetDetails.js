import React from 'react';
import styled from 'styled-components'
import { useParams } from 'react-router-dom';

import { BigTweet } from '../Tweet';

const TweetDetails = () => {
  const { tweetId } = useParams();
  let [thisTweet, setThisTweet] = React.useState(null);
  React.useEffect(() => {
    fetch(`/api/tweet/${tweetId}`)
      .then(res=>res.json())
      .then(res=>{setThisTweet(res.tweet)})
  },[])
  return (
    <Wrapper>
      {thisTweet ? <BigTweet 
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
      /> : 
      <div>loading</div>}
    </Wrapper>
    )
}

const Wrapper = styled.div`
  flex:2;
`;

export default TweetDetails;