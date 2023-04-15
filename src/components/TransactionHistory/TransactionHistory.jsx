import PropTypes from 'prop-types';

import {
  Table,
  TableHead,
  TableHeadRow,
  TableHeadTitle,
  TableBody,
  TableBodyRow,
  TableBodyCell,
} from './TransactionHistory.styled.jsx.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <TableHead>
        <TableHeadRow>
          <TableHeadTitle>Type</TableHeadTitle>
          <TableHeadTitle>Amount</TableHeadTitle>
          <TableHeadTitle>Currency</TableHeadTitle>
        </TableHeadRow>
      </TableHead>

      <TableBody>
        {items.map(({ id, type, amount, currency }) => (
          <TableBodyRow key={id}>
            <TableBodyCell>{type}</TableBodyCell>
            <TableBodyCell>{amount}</TableBodyCell>
            <TableBodyCell>{currency}</TableBodyCell>
          </TableBodyRow>
        ))}
      </TableBody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
