import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route
  } from 'react-router-dom';

import ProfileIdMediaFeed from './ProfileIdMediaFeed';
import ProfileIdLikesFeed from './ProfileIdLikesFeed';
import ProfileIdTweetsFeed from './ProfileIdTweetsFeed';
import ProfileIdFeedBar from './ProfileIdFeedBar';



const ProfileFeedBar = ({ profile, setProfile }) => {
  const {handle} = profile; 
  const [feed, setFeed] = React.useState(null)
  React.useEffect(()=>{
        fetch(`/api/${handle}/feed`)
      .then(res=>res.json())
      .then(res=>setFeed(res))
  },[])
  return(
    // <Router>
    <>
      <ProfileIdFeedBar handle={handle} />
      {/* <Switch> */}
        <Route path={`/${handle}/Media`} exact>
          <ProfileIdMediaFeed feed={feed}/>
        </Route>
        <Route path={`/${handle}/Likes`} exact>
          <ProfileIdLikesFeed feed={feed}/>
        </Route>
        <Route path={`/${handle}`} exact>
          <ProfileIdTweetsFeed feed={feed}/>
        </Route>
      {/* </Switch> */}
    </>
    // </Router>
  );
}

export default ProfileFeedBar;
