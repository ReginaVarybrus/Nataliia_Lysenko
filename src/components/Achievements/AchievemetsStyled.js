import styled from 'styled-components';

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
