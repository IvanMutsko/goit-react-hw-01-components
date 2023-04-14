import styled from '@emotion/styled';

export const Item = styled.li`
  max-width: 250px;
  display: flex;
  border: 5px solid #454b1b;
  border-radius: 10px;
  padding: 20px;
  align-items: center;
  justify-content: space-between;
  background-color: #e8d9f4;
`;

export const Status = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border: 2px solid #454b1b;
  font-size: 10px;
  font-weight: 700;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${({ active }) => {
    return active ? '#AAFF00' : '#FF5733';
  }};
`;

export const Avatar = styled.img`
  /* display: block; */
`;

export const FriendName = styled.p`
  font-size: 20px;
  font-weight: 500;
`;
