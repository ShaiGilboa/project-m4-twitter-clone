import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';

import TweetActions from './TweetActions';

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

const BigTweet = ( {
  author,
  retweetFrom,
  timestamp,
  isLiked,
  isRetweeted,
  numLikes,
  numRetweets,
  status,
  media,
  // handleToggleLike,
  // handleToggleRetweet,
}) => {
  const timestampFormatted = format(new Date(timestamp), "h:mm' 'a' \u00B7 'MMM do, yyyy'")
  return (
    <Wrapper>
      <Header>
        <Avatar src={author.avatarSrc} />
        <Name>
          <DisplayName to={`/${author.handle}`}>{author.displayName}</DisplayName>
          <Username>@{author.handle}</Username>
        </Name>
      </Header>
      <TweetContents>{status}</TweetContents>
      {media.length ? <Media src={media[0].url} /> : null }
      <Timestamp>{timestampFormatted}</Timestamp>
      <Divider />
      <TweetActions isLiked={isLiked} isRetweeted={isRetweeted}/>
      <Divider />
    </Wrapper>
  );
}

export default BigTweet;

const Wrapper = styled.div`
  background: white;
  width: 70vw;
  padding: 16px;
  text-align: left;
  /* padding-bottom: 0; */
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Ubuntu, 'Helvetica Neue', sans-serif;
  flex-direction:column;
  border: solid 0 1px grey;
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
  flex-direction: column;
  justify-content: center;
  padding: 0px 16px;
`;

const DisplayName = styled(Link)`
  /* display: block; */
  text-decoration: none;
  /* width: fit-content; */
  color: black;
  font-size: 15px;
  line-height: 20px;
  font-weight: bold;
  &:hover{
    text-decoration: underline;
  }
`;

const Username = styled.div`
  font-size: 15px;
  line-height: 20px;
  color: rgb(101, 119, 134);
`;

const TweetContents = styled.div`
  font-size: 22px;
  padding: 16px 0;
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



// Tweet.propTypes = propTypes;


