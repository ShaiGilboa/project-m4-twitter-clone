import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const ProfileIdFeedBar = ({ handle }) => {  
  return (
    <Wrapper>
      <StyledNavLink to={`/${handle}/tweets`}>
        tweets
      </StyledNavLink>
      <StyledNavLink to={`/${handle}/media`}>
        media
      </StyledNavLink>
      <StyledNavLink to={`/${handle}/likes`}>
        likes
      </StyledNavLink>
    </Wrapper>
  );
}

export default ProfileIdFeedBar;

const Wrapper = styled.div`
  flex-direction: row;
`;

const StyledNavLink = styled(NavLink)`
  flex:1;
  justify-content: center;
  padding: 10px 0;
  text-decoration: none;
  border-bottom: solid 1px white;
  &:hover {
    border-bottom: solid 1px red;
  }
  &.active{
    border-bottom: solid 1px green;
  }
`;