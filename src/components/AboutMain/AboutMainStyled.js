import styled from 'styled-components';
import { device } from '@/constants/MediaQueries';
import pattern from '@/assets/images/patternLines.svg';

export const AboutMainStyled = styled.section`
  width: 100%;
  background-color: var(--color-background-2);
  background-image: url(${pattern});
  background-size: cover;
  background-position: center;
  // height: 100vh;
  height: calc(100vh - 68px);

  scroll-snap-align: start;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentAbout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media ${device.tablet} {
    flex-direction: row;
    text-align: left;
  }
`;

export const ImageThumb = styled.div`
  width: 100%;
  max-width: 450px;
  aspect-ratio: 3/4;
  overflow: hidden;
  border-radius: 4.5px;

  img {
    width: 100%;
    height: 100%;

    object-fit: cover;
  }

  @media ${device.tablet} {
    max-width: 350px;
  }
  @media ${device.laptop} {
    max-width: 437px;
  }
`;

export const TextBoxStyled = styled.div`
  max-width: 450px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 21px;

  h2 {
    color: var(--color-green-5);
  }

  p {
    color: var(--black-color);
    text-align: justify;
  }
  @media ${device.tablet} {
    p {
      text-align: left;
    }
  }
  @media ${device.tablet} and (max-width: 1023px) {
    max-width: 350px;
  }
`;
