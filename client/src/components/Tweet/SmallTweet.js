import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { format } from 'date-fns';
import { Link, useHistory } from 'react-router-dom';

import TweetActions from './TweetActions';

import { COLORS } from '../../data/constants';
import {SmallRetweetIcon} from '../../data/ProjectIcons';

const SmallTweet = ( {
  id,
  author,
  retweetFrom,
  timestamp,
  isLiked,
  isRetweeted,
  numLikes,
  numRetweets,
  status,
  media,
  toggleLikeTweet,
  toggleRetweet,
}) => {

  const handleClick = (target) => {

  }
  // console.log('smallTweet', status)
  // console.log('retweet', isRetweeted)
  // console.log('retweetFrom',retweetFrom)
  let history = useHistory();
  const timestampFormatted = ' \u00B7 ' + format(new Date(timestamp), 'MMM do');
  return (
    <Wrapper onClick={()=>history.push(`/tweet/${id}`)}>
        {retweetFrom ? (<><SmallRetweetIcon /> { retweetFrom.displayName} retweeted</>) : null}
      <Header>
        <Avatar src={author.avatarSrc} />
        <Info>
          <Name>
            <DisplayName onClick={(event)=>{event.stopPropagation();history.push(`/${author.handle}`)}}>{author.displayName}</DisplayName>
            <Username>@{author.handle}</Username>
            <Timestamp>{timestampFormatted}</Timestamp>
          </Name>
          <TweetContents>{status}
          {media.length ? <Media src={media[0].url} /> : null }
          </TweetContents>
        </Info>
      </Header>
          <TweetActions
            isLiked={isLiked}
            isRetweeted={isRetweeted}
            id={id}
            numLikes={numLikes}
            numRetweets={numRetweets}
            />
    </Wrapper>
  );
}

export default SmallTweet;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding-right:10px;
`;

const Wrapper = styled.div`
  display:block;
  color: black;
  border-radius: 10px;
  text-decoration: none;
  background: white;
  width: 70vw;
  padding: 16px;
  text-align: left;
  /* padding-bottom: 0; */
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Ubuntu, 'Helvetica Neue', sans-serif;
  flex-direction:column;
  border: solid 0 1px grey;
  &:hover{
    background-color:${COLORS.greyBG};
    cursor: pointer;
  }
`;

const Header = styled.header`
  display: flex;
`;

const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;

const Name = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: left;
  padding: 0px 16px;
  
`;

const DisplayName = styled.p`
  text-decoration:none;
  color: black;
  font-size: 15px;
  line-height: 20px;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;

const Username = styled.div`
  font-size: 15px;
  line-height: 20px;
  color: rgb(101, 119, 134);
  margin: 0 6px;
`;

const TweetContents = styled.div`
  flex-direction: column;
  font-size: 15px;
  font-weight: 500;
  padding: 0px 16px 5px;
  /* padding: 16px 0; */
  /* justify-content: left; */
`;

const Timestamp = styled.div`
  color: rgb(101, 119, 134);
  font-size: 16px;
  padding-bottom: 16px;
`;

const Divider = styled.div`
  height: 1px;
  background: rgb(230, 236, 240);
`;

const Media = styled.img`
  border-radius: 10px;
  width:100%;
  object-fit:cover;
`;


// const propTypes = {
//   author: PropTypes.obj.isRequired,
//   retweet: PropTypes.obj,
//   status: PropTypes.string.isRequired,
//   numLikes: PropTypes.number.isRequired,
//   numRetweets: PropTypes.number.isRequired,
//   timestamp: PropTypes.string.isRequired,
//   isLiked: PropTypes.bool.isRequired,
//   isRetweeted: PropTypes.bool.isRequired,
//   handleToggleLike: PropTypes.func.isRequired,
//   handleToggleRetweet: PropTypes.func.isRequired,
//   media: PropTypes.array,
// };


// Tweet.propTypes = propTypes;


