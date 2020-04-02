import React from 'react';
import Styled from 'styled-components';

import Feed from '../../HomeFeed/Feed';

const ProfileTweetsFeed = ({ feed }) => {
  console.log('TweetsFeed', feed)
  return (
    <>
      <div>ProfileTweetsFeed</div>
      {feed ? <Feed tweetIds={feed.tweetIds} tweetsById={feed.tweetsById} /> : <div>Loading</div>}
    </>
  );
}

export default ProfileTweetsFeed;