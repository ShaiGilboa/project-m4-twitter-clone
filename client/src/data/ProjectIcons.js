import React from 'react'
import { withBaseIcon } from 'react-icons-kit'
import { bookmark } from 'react-icons-kit/feather/bookmark';
import { home } from 'react-icons-kit/feather/home';
import { user } from 'react-icons-kit/feather/user';
import { bell } from 'react-icons-kit/feather/bell';
import {pinOutline} from 'react-icons-kit/typicons/pinOutline'
import {calendar} from 'react-icons-kit/icomoon/calendar';
import {retweet} from 'react-icons-kit/fa/retweet';

//lets say the icons on your side navigation are all color red
const SideIconContainer = 
    withBaseIcon({
      size: 20,
    });

const SmallIconContainer = 
    withBaseIcon({
      size: 15,
    });

export const HomeIcon = () => <SideIconContainer icon={home}/>
export const UserIcon = () => <SideIconContainer icon={user}/>
export const BookmarksIcon = () => <SideIconContainer icon={bookmark}/>
export const NotificationsIcon = () => <SideIconContainer icon={bell}/>
export const SmallLocationIcon = () => <SmallIconContainer icon={pinOutline}/>
export const SmallCalenderIcon = () => <SmallIconContainer icon={calendar}/>
export const SmallRetweetIcon = () => <SideIconContainer icon={retweet} />