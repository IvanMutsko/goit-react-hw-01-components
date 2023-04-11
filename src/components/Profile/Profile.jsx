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
