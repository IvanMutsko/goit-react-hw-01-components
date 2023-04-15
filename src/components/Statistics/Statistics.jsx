import PropTypes from 'prop-types';
import { getRandomHexColor } from '../../utils/getRandomHexColor';
import {
  StatisticsWrap,
  Title,
  List,
  StatsItem,
  StatsText,
  StatsValue,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsWrap>
      {title && <Title>{title}</Title>}
      <List>
        {stats.map(({ id, label, percentage }) => (
          <StatsItem key={id} style={{ backgroundColor: getRandomHexColor() }}>
            <StatsText>{label}</StatsText>
            <StatsValue>{percentage}</StatsValue>
          </StatsItem>
        ))}
      </List>
    </StatisticsWrap>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
