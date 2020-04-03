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
  },[profileId])

  console.log('profile', profile)

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
          <Bio>{profile.bio}</Bio>
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
  width: 8rem;
  height: 8rem;
  position: relative;
  border-radius: 50%;
  border: .4rem solid white;
  top: -4rem;
  left: 1rem;
`;

const Info = styled.div`
  position: relative;
  top: -4rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position:relative;
  flex-direction: row;
  height: fit-content;
`;

const Name = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  padding: 0 1rem;
  position: relative;
  width: fit-content;
  height: fit-content;
`;

const DisplayName = styled.div`
  text-decoration:none;
  color: black;
  font-size: 1.5rem;
  font-weight: bold;
  width: fit-content;
`;

const Username = styled.div`
  font-size: 1rem;
  color: ${COLORS.greyText};
`;

const Follows = styled.p`
  /* flex: 1; */
  background-color: lightgrey;
  color: grey;
  width: fit-content;
  margin-left: 1rem;
  padding: 0 0.1rem;
  border-radius: 0.2rem;
`;

const FollowingStatus = styled.button`
  margin-bottom: 100%;
  background: ${COLORS.primary};
  color: white;
  border: none;
  font-size:1rem;
  margin-left: 0.5rem;
  padding: 0.5rem 0.6rem;
  border-radius: 1.2rem; 
  height: fit-content;
  margin-bottom: 0;
`;

const Bio = styled.div`
  margin: 0.9rem 0;
`;

const Info2 = styled.div`
  color: ${COLORS.greyText};
`;

const Location = styled.div`
  display: inline;
  margin-right:0.2rem;
`;

const Joined = styled.span`
  margin-left: 1rem;
  display: inline;
`;

const FollowingErs = styled.div`
  margin: 0.5rem 0;
  flex-direction: row;
`;

const PartFollowings = styled.div`
`;

const PartFollowers = styled.div`
  margin-left: 1rem;
`;

const Bold = styled.span`
  font-weight: bold;
  width: fit-content;
  padding-right: 0.2rem;
`;