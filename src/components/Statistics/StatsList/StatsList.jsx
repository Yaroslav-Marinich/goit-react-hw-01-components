import PropTypes from 'prop-types';
import { ListStyle, ListItem, ItemLabel, ItemPerc } from './StatsList.styled';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const StatsList = ({ stats }) => {
  return (
    <ListStyle>
      {stats.map(statItem => (
        <ListItem key={statItem.id}>
          <ItemLabel>{statItem.label}</ItemLabel>
          <ItemPerc>{statItem.percentage}%</ItemPerc>
        </ListItem>
      ))}
    </ListStyle>
  );
};

StatsList.propTypes = {
  stat: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
