import styled, { keyframes, css } from 'styled-components';
import { device } from '@/constants/MediaQueries';

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

export const IntroStyled = styled.section`
  width: 100%;
  // max-width: 1100px;
  padding: 0 10px;
  margin: 0 auto;
  height: calc(100vh - 68px);
  // height: 100vh;

  scroll-snap-align: start;
  // position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: var(--color-orange-1);
  color: var(--color-green-5);
  // height: 600px;

  @media ${device.tablet} {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  @media ${device.laptop} {
    justify-content: center;

    // height: calc(100vh - 68px);
  }
`;

export const IntroContent = styled.div`
  z-index: 1;
`;

export const Text = styled.p`
  padding-top: 10px;
  width: 348px;

  @media ${device.tablet} {
    padding-top: 31px;
    width: 325px;
  }

  @media ${device.laptop} {
    width: 428px;
  }

  @media ${device.laptopL} {
    padding-top: 51px;
    width: 428px;
  }
`;

export const ImageCircleWrap = styled.div`
  position: relative;
  // width: 100%;
`;

export const Circle = styled.svg`
  position: absolute;
  top: 8px;
  left: -40px;
  transform: translate(-51%, 0);
  width: 253px;
  height: 253px;
  z-index: 0;

  circle {
    fill: none;
    stroke: var(--color-orange-6);
    stroke-width: 1px;
    stroke-dasharray: 616, 616;
    stroke-dashoffset: 616;
    animation: ${drawCircle} 3s ease-in-out forwards;
  }

  @media ${device.tablet} {
    width: 332px;
    height: 332px;
    left: -70px;
    top: 0;
  }

  @media ${device.laptop} {
    width: 432px;
    height: 432px;
    left: -160px;
    top: -40px;
  }

  @media ${device.laptopL} {
    top: 10px;
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
  @media ${device.tablet} {
    width: 370px;
    height: auto;
    margin-left: 0px;
  }

  @media ${device.laptop} {
    width: 450px;
  }

  @media ${device.laptopL} {
    width: 596px;
    height: 722px;
  }
`;

export const MainImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const ScrollButtonWrap = styled.div`
  display: none;

  @media ${device.tablet} {
    display: flex;
    position: relative;
    width: 240px;
    height: 240px;
    justify-content: center;
    align-items: center;
    margin-top: 22px;
    margin-left: 0;
  }

  @media ${device.laptop} {
    margin-left: 230px;
  }
`;

export const ScrollButton = styled.button`
  position: absolute;
  width: 120px;
  height: 120px;
  background-color: var(--color-border-red);
  border: none;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;

  svg {
    transform: rotate(90deg);
    width: 42px;
  }
  // need add hover effect
  &:hover {
    svg {
    }
  }
`;

export const ScrollButtonCircle = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-50%, -50%);
  width: 240px;
  height: 240px;
  z-index: -1;

  circle {
    fill: none;
    stroke: var(--color-orange-7);
    stroke-width: 1px;
    stroke-dasharray: 616, 616;
    stroke-dashoffset: 616;
    animation: ${drawCircle} 3s ease-in-out forwards;
  }
`;
