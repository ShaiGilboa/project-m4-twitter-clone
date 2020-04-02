import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';

import { COLORS } from '../../data/constants';
import { SmallLocationIcon, SmallCalenderIcon } from '../../data/ProjectIcons';
import ProfileIdFeed from './ProfileIdFeed';

const Profile = () => {
  const { profileId } = useParams();
  const [profile, setProfile] = React.useState(null);
  React.useEffect(() => {
    fetch(`/api/${profileId}/profile`)
      .then(res=>res.json())
      .then(res=>setProfile(res.profile))

  },[])
  // console.log('profile',profile)

  const formattedJoinedDate = profile ? format(new Date(profile.joined), `MMMM yyyy`) : '';
  return (
    <Wrapper>
    {profile ? (
      <>
      <Banner src={profile.bannerSrc} />
      <Avatar src={profile.avatarSrc} />
      <Info>
        <Name>
          <DisplayName>{profile.displayName}</DisplayName>
          <Username>
            @{profile.handle}
            <Follows>{profile.isFollowingYou ? 'Follows you' : 'Doesn\'t follow you'}</Follows>
          </Username>
          <BestFriends>Best friends with @{'?'}.</BestFriends>
          <Info2>
            <Location>
              <SmallLocationIcon />
              {' location'}
            </Location>
            <Joined>
              <SmallCalenderIcon />
              {` Joined ${formattedJoinedDate}`}
            </Joined>
          </Info2>
          <FollowingErs>
            <PartFollowings>
              <Bold>{profile.numFollowing}</Bold> Following
            </PartFollowings>
            <PartFollowers>
              <Bold>{` ${profile.numFollowers}`}</Bold> Followers
            </PartFollowers>
          </FollowingErs>
        </Name>
        <FollowingStatus>{profile.isBeingFollowedByYou ? 'Following' : 'Not Following'}</FollowingStatus>
      </Info>
      <ProfileIdFeed profile={profile} setProfile={setProfile}/>
      </>
    ) : <div>Profile</div>
    }
    </Wrapper>
  );
}

export default Profile;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  width: 70vw;
  height: fit-content;
`;

const Banner = styled.img`
  height: 25vh; 
  object-fit: cover;
`;

const Avatar = styled.img`
  width: 12vw;
  height: 12vw;
  position: relative;
  border-radius: 50%;
  border: 1vw solid white;
  top: -6vw;
  left: 2vw;
`;

const Info = styled.div`
  /* display: block; */
  position: relative;
  top: -6vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position:relative;
  flex-direction: row;
  height: fit-content;
`;

const Name = styled.div`
  /* flex: 1;
  top: -6vw; */
  display: flex;
  flex-direction: column;
  justify-content: left;
  padding: 0px 16px;
  position: relative;
  width: fit-content;
  height: fit-content;
`;

const DisplayName = styled.div`
  text-decoration:none;
  color: black;
  font-size: 2vw;
  /* line-height: 20px; */
  font-weight: bold;
  width: fit-content;
`;

const Username = styled.div`
  font-size: 1.5vw;
  /* line-height: 20px; */
  color: ${COLORS.greyText};
`;

const Follows = styled.p`
  /* flex: 1; */
  background-color: lightgrey;
  color: grey;
  width: fit-content;
  margin-left: 1vw;
  padding: 0 1px;
  border-radius: 2px;
`;

const FollowingStatus = styled.button`
  /* position: relative; */
  /* align-self: start; */
  margin-bottom: 100%;
  background: ${COLORS.primary};
  color: white;
  border: none;
  font-size:1rem;
  margin-left:5px;
  padding: 5px 8px;
  border-radius: 20px; 
  height: fit-content;
  margin-bottom: 0;
`;

const BestFriends = styled.div`
  margin: 10px 0;
`;

const Info2 = styled.div`
  color: ${COLORS.greyText};
`;

const Location = styled.div`
  display: inline;
  margin-right:2px;
`;

const Joined = styled.span`
  margin-left: 15px;
  display: inline;
`;

const FollowingErs = styled.div`
  margin: 5px 0;
  flex-direction: row;
`;

const PartFollowings = styled.div`
`;

const PartFollowers = styled.div`
  margin-left: 15px;
`;

const Bold = styled.span`
  font-weight: bold;
  width: fit-content;
  padding-right: 2px;
`;