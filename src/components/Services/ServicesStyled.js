import styled from 'styled-components';
import { device } from '@/constants/MediaQueries';

export const ServicesStyled = styled.section`
  width: 100%;
  background-color: var(--color-background-1);

  // height: calc(100vh - 68px);

  // scroll-snap-align: start;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px 0;

  @media ${device.tablet} {
    padding: 90px 0;
  }
`;

export const HeaderServices = styled.div`
  display: flex;
  flex-direction: column;
  gap: 21px;
  margin: 0 auto 23px;
  max-width: 450px;
  align-items: flex-start;

  h2 {
    color: var(--color-green-5);
  }

  p {
    color: var(--black-color);
    text-align: justify;
  }

  @media ${device.tablet} {
    max-width: 775px;
    margin: 0 auto 40px;

    p {
      text-align: left;
    }
  }

  @media ${device.laptop} {
    margin: 0 auto 60px;
  }
`;

export const ServicesFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;

  @media ${device.tablet} {
    flex-direction: row;
    gap: 20px;
  }

  @media ${device.laptopL} {
    gap: 28px;
  }
`;

export const ServiceCard = styled.div`
  width: 100%;
  border-radius: 4px 27px 4px 27px;
  overflow: hidden;
  max-width: 378px;
  aspect-ratio: 4/5;
  // height: 450px;
  // height: auto;

  .media {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .image,
  .video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    transition: opacity 0.3s ease-in-out;
  }

  .video {
    opacity: 0;
  }

  &:hover .video {
    opacity: 1;
  }

  &:hover .image {
    opacity: 0;
  }

  a {
    font-size: 20px;
  }

  @media ${device.laptopL} {
    height: 450px;
    aspect-ratio: unset;
  }
`;

export const FooterCard = styled.div`
  padding-left: 15px;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;

  height: 73px;
  background: #00000080;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  h3 {
    font-size: 20px;
    color: var(--white-color);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media ${device.tablet} {
    height: 69px;

    h3 {
      font-size: clamp(15px, 2vw, 22px);
    }
  }
`;

export const FooterButton = styled.button`
  background-color: var(--color-border-red);
  height: 100%;
  width: 73px;
  border: none;
  transition: all 0.3s ease-in-out;

  svg {
    width: 18px;
    height: 18px;
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    background-color: var(--color-brand-orange);
    svg {
      width: 25px;
    }
  }

  @media ${device.laptop} {
    width: 90px;
    svg {
      width: 35px;
      height: 35px;
    }

     &:hover {
    svg {
      width: 45px;
    }
  }

  @media ${device.laptopL} {
    width: 130px;
  }
`;
