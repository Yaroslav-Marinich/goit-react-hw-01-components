import PropTypes from 'prop-types';
import { StatsTitle } from './StatsTitle/StatsTitle';
import { StatsList } from './StatsList/StatsList';
import { StatsCard } from './StatisticsCard.styled';

export const StatisticsCard = ({ title, stats }) => {
  return (
    <StatsCard>
      <StatsTitle title={title} />
      <StatsList stats={stats} />
    </StatsCard>
  );
};

StatisticsCard.protoTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
