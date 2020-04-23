import React from 'react';
import styled from 'styled-components';

import { LoadingSpinner } from '../Loading';

import { CurrentUserContext } from '../CurrentUserContext';
import { ComposingTweetError } from '../Error';
import { COLORS } from '../../data/constants';


const ComposeTweet = () => {
  const {
    currentUserState : {
      currentUserProfile,
      currentUserHomeFeed,
      status,
    },
    currentUserAction: {
      newTweet,
      setStatus,
    },
  } = React.useContext(CurrentUserContext);

  const textareaHandler = (event) => {
    setMeow(event.target.value)
  }

  const submitMeow = (event) => {
    event.preventDefault();
    setStatus('tweeting')
    backupMeow = meow;
    const body = {
      status: meow,
    };
    fetch('/api/tweet', {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
            "Content-Type": "application/json",
            "Accept" : "application/json"
        },
    })
    .then(res=>res.json())
    .then(res=>{
      newTweet(res.tweet);
      setMeow('');
    })
    .catch(err=>setStatus('error-posting-tweet'))
  }
  
  const [meow, setMeow] = React.useState('')
  let counter = meow.length;
  let backupMeow = meow;
  React.useEffect(()=> {
    counter++;
  },[meow])
  return (
    <Wrapper onSubmit={(event)=>submitMeow(event)}>
      {status!=='error-posting-tweet' ?
      (<>
      <User>
        <Avatar src={currentUserProfile.avatarSrc} />
        <TweetTextArea
          autoFocus
          value={meow}
          placeholder={'anything you want to Meow?'}
          required
          onChange={(event)=>textareaHandler(event)}
          />
      </User>
      <Info style={{color: counter <= 280 ? (counter < (0.8 * 280) ? 'black' : 'yellow') : 'red' }}>
        {280 - counter}
        <MeowButton type={'Submit'} disabled={counter>280 || status!=='idle'}>
          {status === 'tweeting' ? <div style={{width: 'fit-content', height: 'fit-content', margin: 'auto'}}>
<LoadingSpinner size={'small'} color={COLORS.primaryLight}/></div> : 'Meow'}
        </MeowButton>
      </Info>
      </>) :
      <ComposingTweetError meow={meow} />
}
    </Wrapper>
  );
}

const MeowButton = styled.button`
  background: ${COLORS.primary};
  color: white;
  font-weight: bold;
  border: 0.2rem white solid;
  margin-top:0.2rem;
  width: 5rem;
  height: 3rem;
  border-radius: 1rem;
  justify-content: center;
  align-content: center;
  ${props => props.disabled ? 'filter: grayscale(80%)'
  : 
  (`&:hover{
    cursor: pointer;
    border: 0.2rem solid ${COLORS.greyBG};
  }`)
  };
`;

const Wrapper = styled.form`
  flex-direction: column;
`;

const User = styled.div`
  flex-direction: row;
`;

const Avatar = styled.img`
  width: 9rem;
  height: 9rem;
  position: relative;
  border-radius: 50%;
`;

const TweetTextArea = styled.textarea`
  width:90%;
  resize: none;
`;

const Info = styled.div`
  justify-content: flex-end;
  align-items:center;
`;

export default ComposeTweet;