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

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Sidebar />
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
    </Router>
  );
}

export default App;
