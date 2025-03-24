import React from 'react';
import styled, { keyframes, css } from 'styled-components';

const angles = [0, 60, 120, 180, 240, 300];

const moveOut = angles.map(
  angle => keyframes`
  from { transform: rotate(${angle}deg) translateY(0) scale(0); }
  3% { transform: rotate(${angle}deg) translateY(0.2em) scale(1); }
  97% { transform: rotate(${angle}deg) translateY(7.3em) scale(1); }
  to { transform: rotate(${angle}deg) translateY(7.5em) scale(0); }
`
);

const ripple = keyframes`
  from, to { width: 0.2em; }
  33% { width: 2.4em; }
`;

const LoaderWrapper = styled.div`
  font-size: 20px;
  display: grid;
  place-items: center;
  min-height: 100vh;
  background-color: var(--color-background-1);
`;

const Hexagon = styled.div`
  --dur: 8s;
  width: 15em;
  height: 15em;
  position: relative;
  overflow: hidden;

  .hexagon__group,
  .hexagon__sector,
  .hexagon__sector::before,
  .hexagon__sector::after {
    position: absolute;
  }

  .hexagon__group {
    width: 100%;
    height: 100%;
  }

  .hexagon__group:nth-child(odd) {
    transform: rotate(30deg);
  }

  ${[0, 1, 2, 3, 4, 5].map(
    i => css`
      .hexagon__group:nth-child(${i + 1}) .hexagon__sector,
      .hexagon__group:nth-child(${i + 1}) .hexagon__sector::before,
      .hexagon__group:nth-child(${i + 1}) .hexagon__sector::after {
        animation-delay: calc(var(--dur) * -${i} / 6);
      }
    `
  )}

  .hexagon__sector,
  .hexagon__sector::before,
  .hexagon__sector::after {
    width: 0.2em;
    height: 0.2em;
    animation-duration: var(--dur);
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  .hexagon__sector {
    top: calc(50% - 0.1em);
    left: calc(50% - 0.1em);
  }

  ${[0, 1, 2, 3, 4, 5].map(
    i => css`
      .hexagon__sector:nth-child(${i + 1}) {
        animation-name: ${moveOut[i]};
      }
    `
  )}

  .hexagon__sector::before,
  .hexagon__sector::after {
    content: '';
    display: block;
    background-color: #aa2909;
    border-radius: 0.1em;
    animation-name: ${ripple};
    animation-duration: var(--dur);
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    top: 0;
    left: 0;
    transform-origin: 0.1em 0.1em;
  }

  .hexagon__sector::before {
    transform: rotate(-30deg);
  }

  .hexagon__sector::after {
    transform: rotate(-150deg);
  }
`;

export default function Loader() {
  return (
    <LoaderWrapper>
      <Hexagon>
        {[...Array(6)].map((_, i) => (
          <div className="hexagon__group" key={i}>
            {[...Array(6)].map((_, j) => (
              <div className="hexagon__sector" key={j}></div>
            ))}
          </div>
        ))}
      </Hexagon>
    </LoaderWrapper>
  );
}
