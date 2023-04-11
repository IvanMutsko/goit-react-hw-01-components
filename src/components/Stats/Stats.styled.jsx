import styled from '@emotion/styled';

export const StatsList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  padding: 0;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 80px;
`;

export const StatsText = styled.p`
  margin: 0;
  font-weight: 700;
  font-style: italic;
`;
