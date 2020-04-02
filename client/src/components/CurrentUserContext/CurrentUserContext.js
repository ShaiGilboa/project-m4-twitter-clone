import React from 'react';

const currentUserInitialState = {
  status: 'loading', /* - loading
                        - error
                        - idle
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
    default:
      throw new Error(`error: unknown booking action: ${action}`);
  }
}
const CurrentUserProvider = ({children}) => {
  const [currentUserState, dispatch] = React.useReducer(reducer, currentUserInitialState)

  const setCurrentUser = (profile) => {
    console.log('profile')
    dispatch({ type: 'SET_CURRENT_USER', profile })
  }
  const setCurrentUSerHomeFeed = (feed) => {
    console.log('feedIds');
    dispatch({type: 'SET_CURRENT_USER_HOME_FEED', feed})
  }

  return (
    <CurrentUserContext.Provider
      value={{
        currentUserState,
        currentUserAction: {
          setCurrentUser,
          setCurrentUSerHomeFeed,
        },
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  )
}

export { CurrentUserContext, CurrentUserProvider };