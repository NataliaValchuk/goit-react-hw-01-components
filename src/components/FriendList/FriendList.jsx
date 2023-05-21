import PropTypes from 'prop-types';
import FriendListModule from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <>
      <ul className={FriendListModule.friendList}>
        {friends.map(friend => (
          <li key={friend.id} className={FriendListModule.item}>
            <span
              className={
                friend.isOnline
                  ? FriendListModule.statusOnline
                  : FriendListModule.statusOffline
              }
            >
              {friend.isOnline}
            </span>
            <img
              className={FriendListModule.avatar}
              src={friend.avatar}
              alt="User avatar"
              width="48"
            />
            <p className={FriendListModule.name}>{friend.name}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};
