import React from 'react';
import styled from 'styled-components';

import Feed from './Feed';
import ComposeTweet from '../ComposeTweet';

import { CurrentUserContext } from '../CurrentUserContext';

const HomeFeed = () => {
  const {
    currentUserState: {
      status,
      currentUserProfile,
      currentUserHomeFeed,
    },
    currentUserAction : {
      setCurrentUser,
      setCurrentUSerHomeFeed,
      setStatus,
    },
  } = React.useContext(CurrentUserContext);
  React.useEffect(()=>{
    if(status==='idle' || status==='tweeting') {
      fetch('/api/me/home-feed')
      .then(res=>res.json())
      .then(res=>{
        // console.log('resFeed')
        setCurrentUSerHomeFeed(res);
        setStatus('idle');
        })
    }
  },[status])
  return (
    <StyledFeed>
      <div>HomeFeed: {status === 'idle' && currentUserProfile.handle}</div>
      {currentUserHomeFeed ? (
        <>
          <ComposeTweet />
          <Feed
          tweetIds={currentUserHomeFeed.tweetIds}
          tweetsById={currentUserHomeFeed.tweetsById}
          />
        </>
      )
      : <div>not yet</div>}
    </StyledFeed>
  )
}

const StyledFeed = styled.div`
  flex-direction: column;
`;

export default HomeFeed;