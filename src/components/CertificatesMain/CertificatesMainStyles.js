import styled from 'styled-components';
import { device } from '@/constants/MediaQueries';

export const CertificatesStyles = styled.section`
  width: 100%;
  background-color: var(--color-background-1);

  //   height: calc(100vh - 68px);
  // height: auto;
  padding: 25px 0;
  // scroll-snap-align: start;
  // scroll-snap-stop: always;
  @media ${device.tablet} {
    padding: 70px 0;
  }
`;

export const ContentBlock = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;

  @media ${device.tablet} {
    align-items: start;
  }
  @media ${device.laptopL} {
    max-width: 1030px;
  }
`;

export const ContentStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;

  @media ${device.tablet} {
    flex-direction: row;
    align-items: flex-end;
  }
  @media ${device.laptop} {
    gap: 40px;
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
    text-align: justify;
  }
  @media ${device.tablet} {
    flex: 1;
    max-width: 382px;
    p {
      font-size: 24px;
      line-height: 150%;
      width: 100%;
    }
  }
`;

export const HeaderCertificates = styled.h2`
  color: var(--color-green-5);
  margin-bottom: 23px;
  text-align: center;
  @media ${device.tablet} {
    text-align: left;
    // max-width: 798px;
  }
`;

export const SmallImg = styled.div`
  display: none;

  @media ${device.tablet} {
    border-radius: 10px;
    background-color: var(--color-gray-2);
    width: 100%;
    width: 380px;
    height: 518px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 10px;
    }
  }
`;

export const ImageThumb = styled.div`
  width: 100%;
  max-width: 382px;
  // height: auto;
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
    flex: 1;
    max-width: 440px;
    max-height: 477px;
  }

  @media ${device.laptopL} {
    max-width: 647px;
    max-height: 641px;
    min-width: 647px;
    min-height: 641px;
  }
`;
