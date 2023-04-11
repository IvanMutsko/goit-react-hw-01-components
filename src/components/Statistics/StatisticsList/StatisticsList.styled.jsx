import styled from '@emotion/styled';

export const List = styled.ul`
  list-style: none;

  display: flex;
  justify-content: space-around;

  margin: 0;
  padding: 0;

  width: 100%;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  border: 1px solid #000000;
  width: 100%;
  padding: 10px;
`;

export const StatsText = styled.p`
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 10px;
`;

export const StatsValue = styled.p`
  margin: 0;
`;
