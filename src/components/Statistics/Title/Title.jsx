import PropTypes from 'prop-types';
import { Title } from './Title.styled';

export const StatisticsTitle = ({ text }) => {
  return <>{text.length > 0 && <Title>{text}</Title>}</>;
};

StatisticsTitle.propTypes = {
  text: PropTypes.string,
};
