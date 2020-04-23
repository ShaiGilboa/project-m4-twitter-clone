import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../data/constants';

import Feed from './Feed';
import ComposeTweet from '../ComposeTweet';
import { LoadingSpinner } from '../Loading';
import { ErrorPage } from '../Error';

import { CurrentUserContext } from '../CurrentUserContext';


const HomeFeed = () => {
  const {
    currentUserState: {
      status,
      currentUserHomeFeed,
    },
    currentUserAction : {
      setCurrentUSerHomeFeed,
      setStatus,
    },
  } = React.useContext(CurrentUserContext);
  React.useEffect(()=>{
    if(status==='idle') {
      fetch('/api/me/home-feed')
      .then(res=>res.json())
      .then(res=>{
        if(status!=='error-posting-tweet'){
          setCurrentUSerHomeFeed(res);
          setStatus('idle');
        }
        })
      .catch(err=>status==='tweeting'?setStatus('error-posting-tweet') : setStatus('error-home'))
    }
  },[status])
  

  return (
    <StyledFeed>
      <ComposeTweet />
      {status ==='error-home' ? <><p>home</p><ErrorPage /></> : 
        (currentUserHomeFeed ? (
            <>
              <Feed
              tweetIds={currentUserHomeFeed.tweetIds}
              tweetsById={currentUserHomeFeed.tweetsById}
              />
            </>
          ) : 
          (status==='error-posting-tweet'? null :
          <div style={{width: 'fit-content', height: 'fit-content', margin: 'auto'}}>
          <LoadingSpinner size={'big'} color={COLORS.primaryLight}/>
          </div>
          )
        )
      }
    </StyledFeed>
  )
}

const StyledFeed = styled.div`
  flex-direction: column;
  width: 70vw;
`;

export default HomeFeed;