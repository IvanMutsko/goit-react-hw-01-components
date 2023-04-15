import styled from '@emotion/styled';

export const Table = styled.table`
  background-color: #c5fcce;

  font-size: 20px;
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  background-color: #04aa6d;
  color: white;
  letter-spacing: 0.2em;
`;

export const TableHeadRow = styled.tr``;

export const TableHeadTitle = styled.th`
  padding: 15px 30px;
  min-width: 100px;
  border: 3px solid #057f52;
`;

export const TableBody = styled.tbody``;

export const TableBodyRow = styled.tr`
  :nth-of-type(even) {
    background-color: #f2f2f2;
  }
`;

export const TableBodyCell = styled.td`
  border: 3px solid #057f52;
  text-align: center;
  padding: 15px;
  :first-of-type {
    text-align: start;
    text-transform: capitalize;
    font-weight: 500;
  }
`;
