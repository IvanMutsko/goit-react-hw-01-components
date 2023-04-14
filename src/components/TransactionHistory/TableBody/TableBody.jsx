import PropTypes from 'prop-types';
import { Body, BodyRow, Cell } from './TableBody.styled';

export const TableBody = ({ transactions }) => {
  return (
    <Body>
      {transactions.map(({ id, type, amount, currency }) => (
        <BodyRow key={id}>
          <Cell>{type}</Cell>
          <Cell>{amount}</Cell>
          <Cell>{currency}</Cell>
        </BodyRow>
      ))}
    </Body>
  );
};

TableBody.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
