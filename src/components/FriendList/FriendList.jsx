import PropTypes from 'prop-types';
import {
  FriendListUl,
  FriendItem,
  FriendStatus,
  FriendAvatar,
  FriendName,
} from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendListUl>
      {friends.map(friend => (
        <FriendItem key={friend.id}>
              <FriendStatus active={friend.isOnline === true}>{friend.isOnline}</FriendStatus>
          <FriendAvatar src={friend.avatar} alt={friend.name}></FriendAvatar>
          <FriendName>{friend.name}</FriendName>
        </FriendItem>
      ))}
    </FriendListUl>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
};
