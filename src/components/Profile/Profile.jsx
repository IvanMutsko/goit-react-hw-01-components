import PropTypes from 'prop-types';

import { Description } from './Description/Description';
import { Stats } from './Stats/Stats';
import { ProfileWrap } from './Profile.styled';

export const Profile = ({ userData }) => {
  return (
    <ProfileWrap>
      <Description userData={userData} />
      <Stats userStats={userData.stats} />
    </ProfileWrap>
  );
};

Profile.propTypes = {
  userData: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }),
};

