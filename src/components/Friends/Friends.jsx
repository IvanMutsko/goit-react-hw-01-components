import PropTypes from 'prop-types';
import { FriendList } from './FriendList/FriendList.styled';
import { FriendListItem } from './FriendListItem/FriendListItem';

export const Friends = ({ friends }) => {
  return (
    <FriendList>
      <FriendListItem></FriendListItem>
    </FriendList>
  );
};
