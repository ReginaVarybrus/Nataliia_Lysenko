import styled from 'styled-components';
import { device } from '@/constants/MediaQueries';

export const ServicesStyled = styled.section`
  width: 100%;
  background-color: var(--color-background-1);
  // padding-top: 99px;
  // padding-bottom: 99px;
  height: calc(100vh - 68px);
  // height: 100vh;

  scroll-snap-align: start;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderServices = styled.div`
  display: flex;
  flex-direction: column;
  gap: 21px;

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
export const ImagesBoxStyled = styled.div`
  display: flex;
  gap: 73px;
`;

export const ImageThumb = styled.div`
  width: 412px;
  height: 450px;
  border-radius: 5px 30px 5px 30px;
  background-color: grey;
`;

export const ServicesGrid = styled.div`
  display: grid;
  grid-temlate-columns: 1fr;
  gap: 20px;

  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.laptop} {
    grid-template-columns: repeat(4, 1fr);
    max-width: 1200px;
  }
`;

export const ServiceCard = styled.div`
  background-color: var(--color-background-2);
  border-radius: 5px 30px 5px 30px;
  .media {
    position: relative;
    width: 100%;
    height: 250px;
    overflow: hidden;
    border-radius: 12px;
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

  .card-content {
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h3 {
    font-size: 18px;
  }

  a {
    font-size: 20px;
  }
`;
