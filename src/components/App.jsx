import { ProfileCard } from './ProfileCard/ProfileCard';
import { StatisticsCard } from './Statistics/StatisticsCard';
import user from '../user.json';
import data from '../data.json';
import { Div } from './App.styled';

export const App = () => {
  return (
    <Div>
      <ProfileCard item={user} />
      <StatisticsCard stats={data} />
    </Div>
  );
};
