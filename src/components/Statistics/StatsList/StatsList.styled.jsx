import styled from 'styled-components';

export const ListStyle = styled.ul`
  display: flex;
  justify-content: center;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 6px 10px;
  background-color: ${statItem => getRandomHexColor()};
`;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const ItemLabel = styled.span`
  color: ${props => props.theme.colors.textGrey};
`;

export const ItemPerc = styled.span`
  font-weight: 600;
    font-size: 18px;
`;

