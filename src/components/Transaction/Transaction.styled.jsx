import styled from 'styled-components';

export const TranceCard = styled.table`
  margin: 0px auto;
  width: 600px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 0px 0px 4px 4px;
  background-color: ${p => p.theme.colors.card};
`;

export const TransHead = styled.thead`
  background-color: DeepSkyBlue;
  color: ${p => p.theme.colors.card};
`;

export const TransHeadItem = styled.th`
  padding: 8px 0;
`;

export const TransRow = styled.tr`
  background-color: ${p =>
    p.even ? p.theme.colors.card : p.theme.colors.greyBg};
`;

export const TransCell = styled.td`
  padding: 8px 0;
  text-align: center;
`;