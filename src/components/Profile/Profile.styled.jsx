import styled from '@emotion/styled';

export const ProfileWrap = styled.div`
  display: inline-block;
  position: relative;
  border: 4px solid #000000;
 
  border-radius: 8px;

  background-color: #c0c0c0
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 4px solid #000000;
  padding: 15px;
`;

export const Avatar = styled.img`
  width: 250px;
  margin-bottom: 10px;
`;

export const UserName = styled.h2`
  margin-top: 0px;
  margin-bottom: 20px;
`;

export const UserInfo = styled.p`
  margin-top: 0px;
  margin-bottom: 10px;
  color: #666666;
  font-weight: 700;
`;

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