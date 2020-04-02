import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
  } from 'react-router-dom';
import HomeFeed from '../HomeFeed';
import Notifications from '../Notifications';
import Bookmarks from '../Bookmarks';
import TweetDetails from '../TweetDetails';
import Profile from '../Profile';
import Sidebar from "../Sidebar";
import GlobalStyles from '../../data/GlobalStyles';

import { CurrentUserContext } from '../CurrentUserContext';

function App() {
  const {
    currentUserState: {
      status,
      currentUserProfile,
    },
    currentUserAction : {
      setCurrentUser,
    },
  } = React.useContext(CurrentUserContext);

  if (status === 'loading') {
    fetch('/api/me/profile')
    .then(res=>res.json())
    .then(res=>{
      setCurrentUser(res.profile);
    })
  }
  
  return (
    <Router>
      <GlobalStyles />
      <Sidebar />
      {status === 'loading' ? (<div>loading</div>) : 
      (
        <Switch>
          <Route path='/' exact>
            <HomeFeed />
          </Route>
          <Route path='/notifications' exact>
            <Notifications />
          </Route>
          <Route path='/bookmarks' exact>
            <Bookmarks />
          </Route>
          <Route path='/tweet/:tweetId'>
            <TweetDetails />
          </Route>
          <Route path='/:profileId'>
            <Profile />
          </Route>
          <Route path='*'>
            <div>Error</div>
          </Route>
        </Switch>
      )}
    </Router>
  );
}

export default App;
