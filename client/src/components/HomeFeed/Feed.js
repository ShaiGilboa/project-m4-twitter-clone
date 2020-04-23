import React from 'react';

import { CurrentUserContext } from '../CurrentUserContext';
import { SmallTweet } from '../Tweet';

const Feed = ({ tweetIds, tweetsById, user }) => {

  const {
    currentUserAction: {
      toggleLikeTweet,
      toggleRetweet,
    }
  } = React.useContext(CurrentUserContext);

  return (
    <>
    {tweetIds.map((tweetId) => {
      const thisTweet = tweetsById[tweetId]
      return <SmallTweet key={tweetId}
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
        toggleLikeTweet={toggleLikeTweet}
        toggleRetweet={toggleRetweet}
        />
      })
      }
    </>
    );
}

export default Feed;