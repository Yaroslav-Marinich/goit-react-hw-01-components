import styled from 'styled-components';

export const ListStyle = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 6px 6px;
  gap: 6px;
`;

export const ItemLabel = styled.span`
  color: ${props => props.theme.colors.textGrey};
`;

export const ItemPerc = styled.span`
  font-weight: 600;
    font-size: 18px;
`;

