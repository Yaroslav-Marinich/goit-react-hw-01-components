import styled from 'styled-components';

export const StatsCard = styled.div`
  margin: 0 auto;
  max-width: 320px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 0px 0px 4px 4px;
  background-color: ${props => props.theme.colors.greyBg};
`;