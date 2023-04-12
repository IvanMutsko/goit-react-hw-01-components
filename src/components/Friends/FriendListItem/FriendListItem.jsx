import PropTypes from 'prop-types';
import { Item } from './FriendListItem.styled';

export const FriendListItem = () => {
  return (
    <Item>
      <span className="status">O</span>
      <img className="avatar" src="" alt="User avatar" width="48" />
      <p className="name">Ivvv Muuuu</p>
    </Item>
  );
};
