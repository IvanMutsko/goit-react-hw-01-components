import PropTypes from 'prop-types';

import { Table } from './Table/Table.styled';
import { TableHead } from './TableHead/TableHead';
import { TableBody } from './TableBody/TableBody';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <TableHead />
      <TableBody transactions={items} />
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
  ),
};
