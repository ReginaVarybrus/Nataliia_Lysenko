import styled from 'styled-components';
// import { device } from '@/constants/mediaQueries';

export const HeaderStyled = styled.div`
  position: fixed;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(1, 1fr);
  height: 60px;
  padding: 8px 80px;
  background-color: var(--color-orange-1);
`;

export const Logo = styled.img`
  width: 60px;
  height: 60px;
`;

export const LangButtons = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.button`
  background: none;
  border: none;
`;
