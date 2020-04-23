import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { COLORS } from '../../../data/constants';

const ProfileIdFeedBar = ({ handle }) => {  
  return (
    <Wrapper>
      <StyledNavLink to={`/${handle}`} exact>
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
  color: ${COLORS.primary};
  justify-content: center;
  padding: 10px 0;
  text-decoration: none;
  border-bottom: solid 1px white;
  border-radius:10px;
  &:hover {
    border-bottom: solid 1px ${COLORS.primary};
    box-shadow: 0px 0px 27px -13px rgba(0,0,0,0.75);
  }
  &.active{
    border-bottom: solid 1px ${COLORS.primary};
  }
`;