import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 0px 0px 4px 4px;
  background-color: ${props => props.theme.colors.card};
`;

export const Description = styled.div`
  padding: 30px 40px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width: 240px;
  margin: 0 auto;
`;

export const Name = styled.p`
  text-transform: uppercase;
  font-weight: 700;
  margin: 0 auto;
`;

export const Tag = styled.p`
  font-weight: 600;
  margin: 0 auto;
  color: ${props => props.theme.colors.textGrey};
`;

export const Location = styled.p`
  font-weight: 600;
  margin: 0 auto;
  color: ${props => props.theme.colors.textGrey};
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: space-evenly;
  background-color: ${props => props.theme.colors.greyBg};
`;

export const StatsItem = styled.li`
  weight: 200px;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const Label = styled.span`
  font-weight: 600;
  margin: 0 auto;
  color: ${props => props.theme.colors.textGrey};
`;

export const Quantity = styled.span`
  font-weight: 700;
  font-size: 20px;
  margin: 0 auto;
`;
