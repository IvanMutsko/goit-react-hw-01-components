import PropTypes from 'prop-types';

import { Description } from '../Description/Description';
import { Stats } from '../Stats/Stats';
import { ProfileWrap } from './Profile.styled';

export const Profile = props => {
  return (
    <ProfileWrap>
      <Description
        username={props.username}
        tag={props.tag}
        location={props.location}
        avatar={props.avatar}
      />
      <Stats
        followers={props.stats.followers}
        views={props.stats.views}
        likes={props.stats.likes}
      />
    </ProfileWrap>
  );
};
