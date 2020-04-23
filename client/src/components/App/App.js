import React from 'react';
import styled from 'styled-components';
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
import Support from '../Support';
import GlobalStyles from '../../data/GlobalStyles';
import {ErrorPage} from '../Error';

import { LoadingSpinner } from '../Loading'
import { CurrentUserContext } from '../CurrentUserContext';
import { COLORS } from '../../data/constants';

function App() {
  const {
    currentUserState: {
      status,
      currentUserProfile,
    },
    currentUserAction : {
      setCurrentUser,
      setStatus,
    },
  } = React.useContext(CurrentUserContext);

  if (status === 'loading') {
    console.log('app fetch');
    
    fetch('/api/me/profile')
    .then(res=>res.json())
    .then(res=>{
      setCurrentUser(res.profile);
    })
    .catch(err=>{
      setStatus('error-app');
    })
  }
  
  return (
    <Wrapper >
    <Router>
      <GlobalStyles />
      <Sidebar profileId={currentUserProfile ? currentUserProfile.handle : ''}/>
      {status === 'loading' ? ( <div style={{width: 'fit-content', height: 'fit-content', margin: 'auto'}}>
<LoadingSpinner size={'big'} color={COLORS.primaryLight} tag='router'/></div>) : 
        (status==='error-app' ? <><p>app</p><ErrorPage /></> :
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
              {/* <Route path='/support' exact>
                <Support />
              </Route> */}
              <Route path='/tweet/:tweetId'>
                <TweetDetails />
              </Route>
              <Route path='/:profileId' >
                <Profile />
              </Route>
              <Route path='*'>
                <div>Error</div>
              </Route>
            </Switch>
          )
      )
      }
    </Router>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  width: 98vw;
  height:100vh;
`;