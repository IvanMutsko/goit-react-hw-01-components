import PropTypes from 'prop-types';
import { StatsList, StatsItem, StatsText } from './Stats.styled';

export const Stats = ({ userStats: { followers, views, likes } }) => {
  return (
    <StatsList>
      <StatsItem>
        <StatsText>Followers</StatsText>
        <StatsText>{followers}</StatsText>
      </StatsItem>
      <StatsItem>
        <StatsText>Views</StatsText>
        <StatsText>{views}</StatsText>
      </StatsItem>
      <StatsItem>
        <StatsText>Likes</StatsText>
        <StatsText>{likes}</StatsText>
      </StatsItem>
    </StatsList>
  );
};

// Stats.propTypes = {
//   followers: PropTypes.number.isRequired,
//   views: PropTypes.number.isRequired,
//   likes: PropTypes.number.isRequired,
// };
