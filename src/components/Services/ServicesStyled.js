import styled from 'styled-components';
import { device } from '@/constants/MediaQueries';

export const ServicesStyled = styled.section`
  width: 100%;
  background-color: var(--color-background-1);

  height: calc(100vh - 68px);

  scroll-snap-align: start;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderServices = styled.div`
  display: flex;
  flex-direction: column;
  gap: 21px;
  margin-bottom: 23px;
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
    max-width: 730px;
    margin-bottom: 60px;

    p {
      text-align: left;
    }
  }
`;

export const ServicesFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media ${device.tablet} {
    flex-direction: row;
    gap: 73px;
  }
`;

export const ServiceCard = styled.div`
  width: 100%;
  border-radius: 5px 30px 5px 30px;
  overflow: hidden;
  max-width: 412px;
  aspect-ratio: 3/4;

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
`;

export const FooterCard = styled.div`
  padding-left: 15px;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;

  height: 69px;
  background: #00000080;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  h3 {
    font-size: 18px;
    color: var(--white-color);
  }

  @media ${device.tablet} {
    h3 {
      font-size: 24px;
    }
  }
`;

export const FooterButton = styled.button`
  background-color: var(--color-border-red);
  height: 100%;
  width: 130px;
  border: none;
  transition: all 0.3s ease-in-out;

  svg {
    width: 35px;
    height: 35px;
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    background-color: var(--color-brand-orange);
    svg {
      width: 45px;
    }
  }
`;
