import PropTypes from 'prop-types';

import { Description } from '../Description/Description';
import { Stats } from '../Stats/Stats';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className="profile">
      <Description
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
      />
      <Stats
        followers={stats.followers}
        views={stats.views}
        likes={stats.likes}
      />
    </div>
  );
};
