import styled from 'styled-components';
import { device } from '@/constants/MediaQueries';

export const CertificatesStyles = styled.section`
  width: 100%;
  background-color: var(--color-background-1);

  display: flex;
  justify-content: center;
  align-items: center;
  //   height: calc(100vh - 68px);
  height: auto;
  padding: 50px 0;
  scroll-snap-align: start;
  scroll-snap-stop: always;
`;

export const ContentStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${device.tablet} {
    //     align-items: flex-start;
    flex-direction: row;
    gap: 40px;
    align-items: end;
    justify-content: space-between;
  }
`;

export const AsideStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 23px;
  align-items: flex-start;
  justify-content: center;

  p {
    color: var(--black-color);
    font-size: 18px;
    max-width: 330px;
    margin-bottom: 23px;
    text-align: justify;
  }
  @media ${device.tablet} {
    p {
      font-size: 20px;
      margin-bottom: 80px;
      max-width: 390px;
    }
  }
`;

export const HeaderCertificates = styled.h2`
  color: var(--color-green-5);
  margin-bottom: 23px;
  text-align: center;
  @media ${device.tablet} {
    text-align: left;
  }
`;

export const Placeholder = styled.div`
  display: none;

  @media ${device.tablet} {
    border-radius: 10px;
    background-color: var(--color-gray-2);
    width: 100%;
    max-width: 382px;
    height: 477px;
    display: block;
  }
`;

export const ImageThumb = styled.div`
  width: 100%;
  max-width: 382px;
  height: auto;
  border-radius: 10px;
  background-color: var(--color-gray-2);
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }

  @media ${device.tablet} {
    max-width: 647px;
    max-height: 641px;
  }
`;
