import styled from 'styled-components';
import { device } from '@/constants/MediaQueries';

export const PriceMainStyled = styled.section`
  width: 100%;
  background-color: var(--color-background-1);
  scroll-snap-align: start;
  height: auto;
  padding: 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderPrice = styled.div`
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

export const PriceGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  justify-items: center;

  @media ${device.tablet} {
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
  }
`;

export const PriceCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  max-width: 350px;
`;

export const MediaWrapper = styled.div`
  width: 100%;
  border-radius: 5px 30px 5px 30px;
  overflow: hidden;
  aspect-ratio: 3/4;
  position: relative;

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
`;

export const FooterCard = styled.div`
  padding-left: 15px;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  h3 {
    font-size: 18px;
    color: var(--white-color);
  }

  @media ${device.laptop} {
    h3 {
      font-size: 22px;
    }
  }
`;

export const FooterButton = styled.button`
  background-color: var(--color-border-red);
  height: 100%;
  width: 90px;
  border: none;
  transition: all 0.3s ease-in-out;

  svg {
    width: 25px;
    height: 25px;
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    background-color: var(--color-brand-orange);
    svg {
      width: 30px;
    }
  }
`;

export const NameServices = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  font-weight: 700;

  p {
    font-weight: 700;
  }

  @media ${device.tablet} {
    font-size: 24px;
  }
`;
