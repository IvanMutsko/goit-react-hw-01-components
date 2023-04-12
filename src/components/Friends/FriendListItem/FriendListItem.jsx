import PropTypes from 'prop-types';
import { Item, Status, Avatar, FriendName } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, online }) => {
  return (
    <Item>
      <Status active={online}>{online ? 'ON' : 'OFF'}</Status>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </Item>
  );
};
