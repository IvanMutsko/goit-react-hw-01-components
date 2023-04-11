import PropTypes from 'prop-types';
import { StatsList, StatsItem, StatsText } from './Stats.styled';

export const Stats = ({ userStats: { followers, views, likes } }) => {
  return (
    <StatsList>
      <StatsItem>
        <StatsText className="label">Followers</StatsText>
        <StatsText className="quantity">{followers}</StatsText>
      </StatsItem>
      <StatsItem>
        <StatsText className="label">Views</StatsText>
        <StatsText className="quantity">{views}</StatsText>
      </StatsItem>
      <StatsItem>
        <StatsText className="label">Likes</StatsText>
        <StatsText className="quantity">{likes}</StatsText>
      </StatsItem>
    </StatsList>
  );
};

Stats.propTypes = {
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
