import styled from '@emotion/styled';

export const Body = styled.tbody``;

export const BodyRow = styled.tr`
  :nth-of-type(even) {
    background-color: #f2f2f2;
  }
`;

export const Cell = styled.td`
  border: 3px solid #057f52;
  text-align: center;
  padding: 15px;

  :first-of-type {
    text-align: start;
    text-transform: capitalize;
    font-weight: 500;
  }
`;
