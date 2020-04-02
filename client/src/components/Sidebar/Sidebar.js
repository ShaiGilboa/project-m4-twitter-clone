import React from "react";
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as Logo } from "../../assets/logo.svg";

import { HomeIcon, UserIcon, BookmarksIcon, NotificationsIcon } from '../../data/ProjectIcons';

import { COLORS } from '../../data/constants';


const Sidebar = () => {
    return (
    <StyledHeader>
        <Link to='/' >
            <StyledLogo />
        </Link>
        <StyledLink to='/' exact  >
            <HomeIcon />
            <p>Home</p>
        </StyledLink>
        <StyledLink to='/:ProfileId'>
            <UserIcon />
            <p>ProfileId</p>
        </StyledLink>
        <StyledLink to='/notifications'>
            <NotificationsIcon />
            <p>Notifications</p>
        </StyledLink>
        <StyledLink to='/bookmarks'>
            <BookmarksIcon />
            <p>Bookmarks</p>
        </StyledLink>
    </StyledHeader>
    );
}

export default Sidebar;

const style = {
    fontWeight: "bold",
    color: COLORS.primary,
}
const StyledLink = styled(NavLink)`
    width: fit-content;
    text-align:center;
    align-items:center;
    &:hover{
        cursor: pointer;
        background-color: ${COLORS.primaryBG};
        border-radius:30px;
        }
    p{
        width: 100%;
        padding: 1px 5px;
        margin: 3px 0;
    }
    &.active {
        font-weight: bold;
        color: ${COLORS.primary};
    }
`;

const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    align-items:left;
    margin-left:2vw;
    width:20vw;
    height:100vh;
    a {
        text-decoration: none;
        color: #262322;
    }
`;

const StyledLogo = styled(Logo)`
    width:50px;
`;
