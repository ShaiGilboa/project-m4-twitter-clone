import React from 'react';
import styled from 'styled-components';

import Feed from './Feed';

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
    },
  } = React.useContext(CurrentUserContext);
  React.useEffect(()=>{
    if(status==='idle') {
      fetch('/api/me/home-feed')
      .then(res=>res.json())
      .then(res=>{
        console.log('resFeed')
        setCurrentUSerHomeFeed(res);
        })
    }
  },[status])
  return (
    <StyledFeed>
      <div>HomeFeed: {status === 'idle' && currentUserProfile.handle}</div>
      {currentUserHomeFeed ? <Feed
        tweetIds={currentUserHomeFeed.tweetIds}
        tweetsById={currentUserHomeFeed.tweetsById}
        // user={}
        />: <div>not yet</div>}
    </StyledFeed>
  )
}

const StyledFeed = styled.div`
  flex-direction: column;
`;

export default HomeFeed;