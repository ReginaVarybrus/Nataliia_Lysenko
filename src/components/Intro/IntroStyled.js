import styled from 'styled-components';

export const IntroStyled = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  height: 100vh;
  width: 100%;
  background-color: var(--color-orange-1);
  color: var(--color-green-5);
`;

export const IntroContent = styled.div`
  height: 100%;
  width: 561px;
  padding: 107px 0 0 70px;
  z-index: 1;
`;

export const Text = styled.p`
  width: 428px;
  padding-top: 51px;
`;

export const Circle = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-51%, 0);
  width: 432px;
  height: 432px;
  border: 1px solid var(--color-orange-4);
  border-radius: 50%;
  z-index: 0;
`;

export const MainImage = styled.img`
  padding-right: 70px;
  z-index: 1;
`;
