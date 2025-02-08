import styled, { keyframes } from 'styled-components';

const drawCircle = keyframes`
0% { 
stroke-dasharray: 0, 616;
 stroke-dashoffset: 616;
 }
100% {
stroke-dasharray: 616, 616;
 stroke-dashoffset: 0;
}
`;

export const IntroStyled = styled.div`
  width: 100%;
  padding: 0 10px;
  margin: 0 auto;

  position: relative;
  display: flex;
  flex-direction: column-reverse;
  gap: 10px;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: var(--color-orange-1);
  color: var(--color-green-5);
  height: 600px;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  @media (min-width: 1024px) {
    height: calc(100vh - 68px);
  }
`;

export const IntroContent = styled.div`
  z-index: 1;
`;

export const Text = styled.p`
  padding-top: 10px;
  width: 348px;

  @media (min-width: 768px) {
    padding-top: 51px;
    width: 370px;
  }

  @media (min-width: 1024px) {
    padding-top: 51px;
    width: 428px;
  }
`;

export const Circle = styled.svg`
  position: absolute;
  top: 9px;
  left: 35%;
  transform: translate(-51%, 0);
  width: 250px;
  height: 250px;
  z-index: 0;

  circle {
    fill: none;
    stroke: var(--color-orange-4);
    stroke-width: 1px;
    stroke-dasharray: 616, 616;
    stroke-dashoffset: 616;
    animation: ${drawCircle} 3s ease-in-out forwards;
  }

  @media (min-width: 768px) {
    width: 432px;
    height: 432px;
    left: 45%;
  }
`;

export const ImageThumb = styled.div`
  // position: relative;
  width: 290px;
  height: 342px;
  z-index: 1;
  margin-left: auto;

  @media (min-width: 600px) {
    margin-left: 100px;
  }

  @media (min-width: 768px) {
    width: 450px;
    height: 530px;
    margin-left: 0px;
  }

  @media (min-width: 1024px) {
    width: 596px;
    height: 722px;
  }
`;

export const MainImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  z-index: 1;
`;
