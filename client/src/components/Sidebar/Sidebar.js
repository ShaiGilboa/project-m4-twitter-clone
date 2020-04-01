import React from "react";
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as Logo } from "../../assets/logo.svg";

import { Icon } from 'react-icons-kit';
import { bookmark } from 'react-icons-kit/feather/bookmark';
import { home } from 'react-icons-kit/feather/home';
import { user } from 'react-icons-kit/feather/user';
import { bell } from 'react-icons-kit/feather/bell';



const style = {fontWeight: "bold",color: "#E1AD01", borderBottom: "2px solid #E1AD01", width: 'fit-content'}

const StyledLink = styled.p`
    margin: auto 10px;

    &:hover{
        cursor: pointer;
    }
`;

const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    align-items:left;
    margin-left:2vw;
    width:100%;
    height:100vh;
    a {
        text-decoration: none;
        color: #262322;
        margin-right:30px;
    }
    .header {
        flex:1;
        font-size:3rem;
        font-weight:bold;
        color: #262322;
    }
`;

const StyledLogo = styled(Logo)`
    width:60px;
`;

const Sidebar = () => {
    return (
    <StyledHeader>
        <Link to='/'  activeStyle={style}>
            <StyledLogo />
        </Link>
        <NavLink to='/'  activeStyle={style}>
            <StyledLink>
                <Icon icon={home} />
                Home
            </StyledLink>
        </NavLink>
        {/* <NavLink to='/tweet/:tweetId'  activeStyle={style}>
            <StyledLink>TweetId</StyledLink>
        </NavLink> */}
        <NavLink to='/:ProfileId'  activeStyle={style}>
            <StyledLink>
                <Icon icon={user} />
                ProfileId
            </StyledLink>
        </NavLink>
        <NavLink to='/notifications'  activeStyle={style}>
            <StyledLink>
                <Icon icon={bell} />
                Notifications
            </StyledLink>
        </NavLink>
        <NavLink to='/bookmarks'  activeStyle={style}>
            <StyledLink>
                <Icon icon={bookmark} />
                Bookmarks
            </StyledLink>
        </NavLink>
    </StyledHeader>
    );
}

export default Sidebar;