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
