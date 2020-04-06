import React from 'react'
import { withBaseIcon } from 'react-icons-kit'
import { bookmark } from 'react-icons-kit/feather/bookmark';
import { home } from 'react-icons-kit/feather/home';
import { user } from 'react-icons-kit/feather/user';
import { bell } from 'react-icons-kit/feather/bell';
import {pinOutline} from 'react-icons-kit/typicons/pinOutline'
import {calendar} from 'react-icons-kit/icomoon/calendar';
import {retweet} from 'react-icons-kit/fa/retweet';
import {spinner9} from 'react-icons-kit/icomoon/spinner9';
import {ic_warning} from 'react-icons-kit/md/ic_warning';
import {u1F4A9} from 'react-icons-kit/noto_emoji_regular/u1F4A9';

import { COLORS } from './constants';

//lets say the icons on your side navigation are all color red
const SideIconContainer = 
    withBaseIcon({
      size: 20,
    });

const SmallIconContainer = 
    withBaseIcon({
      size: 15,
    });

const BigIconContainer =
    withBaseIcon({
      size:60,
    });

export const BigSpinnerIcon = () => <BigIconContainer icon={spinner9} style={{color: COLORS.primary}} />

export const HomeIcon = () => <SideIconContainer icon={home}/>
export const UserIcon = () => <SideIconContainer icon={user}/>
export const BookmarksIcon = () => <SideIconContainer icon={bookmark}/>
export const NotificationsIcon = () => <SideIconContainer icon={bell}/>
export const SmallLocationIcon = () => <SmallIconContainer icon={pinOutline}/>
export const SmallCalenderIcon = () => <SmallIconContainer icon={calendar}/>
export const SmallRetweetIcon = () => <SmallIconContainer icon={retweet} />
export const SmallSpinnerIcon =(color) => <SmallIconContainer icon={spinner9} style={color} />

export const ErrorIcon = (color) => <SideIconContainer icon={ic_warning} style={color} />
export const TweetErrorIcon = () => <BigIconContainer icon={u1F4A9} />
