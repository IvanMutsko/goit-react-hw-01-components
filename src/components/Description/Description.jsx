import PropTypes from 'prop-types';

export const Description = ({ username, tag, location, avatar }) => {
  return (
    <div className="description">
      <img src={avatar} alt="User avatar" className="avatar" width="250" />
      <p className="name">{username}</p>
      <p className="tag">@{tag}</p>
      <p className="location">{location}</p>
    </div>
  );
};

Description.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
