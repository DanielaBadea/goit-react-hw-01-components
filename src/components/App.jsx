import './App.css';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import user from './Profile/data/user.json';
import data from './Statistics/data/data.json';
import FriendList from './Friends/FriendList';
import friends from './Friends/data/friends.json';

export const App = () => {
  return (
 <>
<Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
<Statistics 
title="Upload stats" stats={data}
 />
 <FriendList friends={friends} />
 </>
  );
};