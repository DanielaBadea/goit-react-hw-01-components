import './App.css';
import Profile from './Profile/Profile';
import user from './Profile/data/user.json';

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
 </>
  );
};