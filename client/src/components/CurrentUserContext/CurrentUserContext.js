import React from 'react';

const currentUserInitialState = {
  status: 'loading', /* - loading
                        - error
                        - idle
                        - tweeting
                        - tweet-action
                      */
  currentUserProfile: null,
  currentUserHomeFeed: null,
};

const CurrentUserContext = React.createContext();

const reducer = (state, action) =>{
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {
        ...state,
        status: 'idle',
        currentUserProfile: action.profile,
      }
    case 'SET_CURRENT_USER_HOME_FEED':
      return {
        ...state,
        currentUserHomeFeed: action.feed,
      }
    case 'NEW_FEED':
      return {
        ...state,
        currentUserHomeFeed: action.newFeed,
        status: 'idle',
      }
    case "SET_STATUS":
      return {
        ...state,
        status: action.newStatus,
      }
    // case "TOGGLE_LIKE":
    //   let newCurrentUserHomeFeed = JSON.parse(JSON.stringify(state.currentUserHomeFeed));
    //   const thisTweet = JSON.parse(JSON.stringify(state.currentUserHomeFeed[action.tweetId]))
    //   thisTweet = {
    //     ...thisTweet,
    //     isLiked: !thisTweet.isLiked,
    //   }
    //   newCurrentUserHomeFeed[action.tweetId] = thisTweet;
    //   return {
    //     ...state,
    //     currentUserHomeFeed: newCurrentUserHomeFeed,
    //     status: 'idle',
    //   }
    // case "TOGGLE_RETWEET":
    //   return {
    //     ...state,
    //     isRetweeted: !state.isRetweeted,
    //     status: 'idle',
    //   }
    default:
      throw new Error(`error: unknown action: ${action}`);
  }
}
const CurrentUserProvider = ({children}) => {
  const [currentUserState, dispatch] = React.useReducer(reducer, currentUserInitialState)

  const changeOneTweet = (tweetId, action) => {
    let newCurrentUserHomeFeed = JSON.parse(JSON.stringify(currentUserState.currentUserHomeFeed));
    console.log('feed: ', newCurrentUserHomeFeed)
    console.log('id',tweetId);
    
    let thisTweet = newCurrentUserHomeFeed.tweetsById[tweetId];
    console.log('thisTweet', thisTweet)
    switch (action.type) {
      case 'newTweet':
        const newTweet = {
          ...action.tweet,
          author: currentUserState.currentUserProfile,
          isLiked: false,
          isRetweeted: false,
          numLikes:0,
          numRetweets:0,
        };
        newCurrentUserHomeFeed.tweetIds.push(action.tweet.id);
        newCurrentUserHomeFeed.tweetsById[action.tweet.id] = newTweet;
        return newCurrentUserHomeFeed;
      case 'like':
        newCurrentUserHomeFeed[action.tweetId] = thisTweet;
        console.log('postLike',thisTweet)
        return newCurrentUserHomeFeed;
      case 'retweet':
        newCurrentUserHomeFeed[action.tweetId] = thisTweet;
        return newCurrentUserHomeFeed;
    }
  }

  const setCurrentUser = (profile) => {
    // console.log('profile')
    dispatch({ type: 'SET_CURRENT_USER', profile })
  }
  const setCurrentUSerHomeFeed = (feed) => {
    // console.log('feedIds');
    dispatch({type: 'SET_CURRENT_USER_HOME_FEED', feed})
  }

  const newTweet = (tweet) => {
    const newFeed = changeOneTweet(null, {type: 'newTweet', tweet})
    dispatch({type: 'NEW_FEED', newFeed})
  }

  const setStatus = (newStatus) => {
    dispatch({type: "SET_STATUS", newStatus})
  }

  const toggleLikeTweet = (tweetId) => {
    console.log('likeId',tweetId)
    const newFeed = changeOneTweet(tweetId, {type: 'like'})
    dispatch({type: "NEW_FEED", newFeed})
  }

  const toggleRetweet = (tweetId) => {
    const newFeed = changeOneTweet(tweetId, {type: 'retweet'})
    dispatch({type: "NEW_FEED", newFeed})
  }

  return (
    <CurrentUserContext.Provider
      value={{
        currentUserState,
        currentUserAction: {
          setCurrentUser,
          setCurrentUSerHomeFeed,
          newTweet,
          setStatus,
          toggleLikeTweet,
          toggleRetweet,
        },
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  )
}

export { CurrentUserContext, CurrentUserProvider };