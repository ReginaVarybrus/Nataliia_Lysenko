import styled, { keyframes, css } from 'styled-components';

const fadeInUp = keyframes`
0% {
transform: translateY(50px);
opacity: 0;
}
100% { 
transform: translateY(0);
opacity: 1;
}
`;
const fadeInLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;
const fadeInRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const scaleUp = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;
export const AnimatedStyles = css`
  .animated {
    opacity: 0;
    transition: opacity 0.3s ease, transform 0.8s ease;
  }

  .animated.in-view.fade-in-up {
    animation: ${fadeInUp} 1s forwards;
  }

  .animated.in-view.fade-in-left {
    animation: ${fadeInLeft} 0.8s forwards;
  }

  .animated.in-view.fade-in-right {
    animation: ${fadeInRight} 0.8s forwards;
  }

  .animated.in-view.scale-up {
    animation: ${scaleUp} 0.8s forwards;
  }
`;
