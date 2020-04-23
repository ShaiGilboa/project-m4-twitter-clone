import React from 'react';

const currentUserInitialState = {
  status: 'loading', /* - loading
                        - error
                        - error-app
                        - error-home
                        - error-posting-tweet
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
    default:
      throw new Error(`error: unknown action: ${action}`);
  }
}
const CurrentUserProvider = ({children}) => {
  const [currentUserState, dispatch] = React.useReducer(reducer, currentUserInitialState)

  const changeOneTweet = (tweetId, action) => {
    let newCurrentUserHomeFeed = JSON.parse(JSON.stringify(currentUserState.currentUserHomeFeed));
    let thisTweet = newCurrentUserHomeFeed.tweetsById[tweetId];
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
        thisTweet = {
          ...thisTweet,
          numLikes: thisTweet.isLiked ? thisTweet.numLiked - 1 : thisTweet.numLikes + 1,
          isLiked: !thisTweet.isLiked,
        }
        newCurrentUserHomeFeed.tweetsById[tweetId] = thisTweet;
        return newCurrentUserHomeFeed;
      case 'retweet':
        thisTweet = {
          ...thisTweet,
          numRetweets: thisTweet.isRetweeted ? thisTweet.numRetweets - 1 : thisTweet.numRetweets + 1,
          isRetweeted: !thisTweet.isRetweeted,
        }
        newCurrentUserHomeFeed.tweetsById[tweetId] = thisTweet;
        return newCurrentUserHomeFeed;
      default:
        throw new Error (`unknown action in 'CurrentUserContext' - 'changeOneTweet':${action}`);
    }
  }

  const setCurrentUser = (profile) => {
    dispatch({ type: 'SET_CURRENT_USER', profile })
  }
  const setCurrentUSerHomeFeed = (feed) => {
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