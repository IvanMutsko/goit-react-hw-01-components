import PropTypes from 'prop-types';
import { FriendList } from './FriendList/FriendList.styled';
import { FriendListItem } from './FriendListItem/FriendListItem';

export const Friends = ({ friends }) => {
  return (
    <FriendList>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          online={isOnline}
        />
      ))}
    </FriendList>
  );
};
