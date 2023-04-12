import PropTypes from 'prop-types';
import { StatisticsTitle } from './Title/Title';
import { StatisticsList } from './StatisticsList/StatisticsList';
import { StatisticsWrap } from './Statistics.styled';

export const Statistics = ({ statisticsData }) => {
  return (
    <StatisticsWrap>
      <StatisticsTitle text="Upload stats" />
      <StatisticsList statisticsData={statisticsData}></StatisticsList>
    </StatisticsWrap>
  );
};

Statistics.propTypes = {
  statisticsData: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
