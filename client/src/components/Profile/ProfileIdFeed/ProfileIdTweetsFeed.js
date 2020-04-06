import React from 'react';
// import styled from 'styled-components';

import Feed from '../../HomeFeed/Feed';

const ProfileTweetsFeed = ({ feed }) => {
  return (
    <>
      <div>ProfileTweetsFeed</div>
      {feed ? <Feed tweetIds={feed.tweetIds} tweetsById={feed.tweetsById} /> : <div>Loading</div>}
    </>
  );
}

export default ProfileTweetsFeed;