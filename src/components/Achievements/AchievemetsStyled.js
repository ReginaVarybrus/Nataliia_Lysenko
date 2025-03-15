import styled from 'styled-components';
import CountUp from 'react-countup';

export const AchievementsStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(1, 1fr);
  gap: 8px;
  height: 313px;
  width: 100%;
  background-color: var(--color-green-5);
  color: var(--color-green-1);
`;

export const AchievemetItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    top: 50%;
    right: -10px;
    transform: translateY(-50%);
    width: 1px;
    height: 193px;
    background-color: var(--color-green-1);
  }
`;

export const Number = styled(CountUp)`
  font-family: Cormorant;
  font-weight: 600;
  font-size: 96px;
  line-height: 80%;
  letter-spacing: -5%;
  text-transform: uppercase;
  margin-bottom: 24px;
`;
