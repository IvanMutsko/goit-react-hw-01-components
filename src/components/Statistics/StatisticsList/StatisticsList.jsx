import PropTypes from 'prop-types';
import {
  List,
  StatsItem,
  StatsText,
  StatsValue,
} from './StatisticsList.styled';
import { getRandomHexColor } from '../../../utils/getRandomHexColor';

export const StatisticsList = ({ statisticsData }) => {
  return (
    <List>
      {statisticsData.map(({ id, label, percentage }) => (
        <StatsItem key={id} style={{ backgroundColor: getRandomHexColor() }}>
          <StatsText>{label}</StatsText>
          <StatsValue>{percentage}</StatsValue>
        </StatsItem>
      ))}
    </List>
  );
};
