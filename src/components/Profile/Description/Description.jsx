import PropTypes from 'prop-types';
import {
  DescriptionBlock,
  Avatar,
  UserName,
  UserInfo,
} from './Description.styled';

export const Description = ({
  userData: { username, tag, location, avatar },
}) => {
  return (
    <DescriptionBlock>
      <Avatar src={avatar} alt="User avatar" />
      <UserName>{username}</UserName>
      <UserInfo>@{tag}</UserInfo>
      <UserInfo>{location}</UserInfo>
    </DescriptionBlock>
  );
};

// Description.propTypes = {
//   username: PropTypes.string.isRequired,
//   tag: PropTypes.string.isRequired,
//   location: PropTypes.string.isRequired,
//   avatar: PropTypes.string.isRequired,
// };
