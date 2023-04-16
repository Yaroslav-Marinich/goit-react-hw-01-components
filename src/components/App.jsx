import { ProfileCard } from './ProfileCard/ProfileCard';
import { StatisticsCard } from './Statistics/StatisticsCard';
import user from './ProfileCard/user.json';
import data from './Statistics/data.json';
import friends from './FriendList/friends.json';
import { Div } from './App.styled';
import { FriendList } from './FriendList/FriendList';

export const App = () => {
  return (
    <Div>
      <ProfileCard item={user} />
      <StatisticsCard stats={data} />
      <FriendList friends={friends} />
    </Div>
  );
};
