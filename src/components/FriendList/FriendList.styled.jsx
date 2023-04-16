import styled from 'styled-components';

export const FriendListUl = styled.ul`
  display: flex;
  flex-direction: column;
  width: 320px;
  margin: 0 auto;
  gap: 10px;
`;

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 6px;
  background-color: ${props => props.theme.colors.card};
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 0px 0px 4px 4px;
`;

export const FriendStatus = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50px;
  background-color: ${props => {
    return props.active ? props.theme.colors.online : props.theme.colors.offline
  }}
`;

export const FriendAvatar = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  width: 52px;
`;

export const FriendName = styled.p`
  padding: 0 6px;
  font-weight: 600;
  font-size: 18px;
`;