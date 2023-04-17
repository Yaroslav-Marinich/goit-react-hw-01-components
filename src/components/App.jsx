import { ProfileCard } from './ProfileCard/ProfileCard';
import { StatisticsCard } from './Statistics/StatisticsCard';
import user from './ProfileCard/user.json';
import data from './Statistics/data.json';
import friends from './FriendList/friends.json';
import transaction from './Transaction/transactions.json';
import { Div } from './App.styled';
import { FriendList } from './FriendList/FriendList';
import { TransTable } from './Transaction/Transaction';

export const App = () => {
  return (
    <Div>
      <ProfileCard item={user} />
      <StatisticsCard title={data.title} stats={data} />
      <FriendList friends={friends} />
      <TransTable transes={transaction} />
    </Div>
  );
};
