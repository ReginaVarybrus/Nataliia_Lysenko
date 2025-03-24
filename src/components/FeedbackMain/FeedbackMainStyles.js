import styled from 'styled-components';
import { device } from '@/constants/MediaQueries';

export const FeedbackMainStyled = styled.section`
  width: 100%;
  background-color: var(--color-background-1);

  // height: auto;
  padding: 25px 0;

  @media ${device.tablet} {
    padding: 50px 0 107px 0;
  }

  // scroll-snap-align: start;
  // scroll-snap-stop: always;
`;

export const ContentStyled = styled.div`
  display: flex;
  justify-content: center;
`;

export const FeedbackBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 23px;
  @media ${device.tablet} {
    flex-direction: row;
    align-items: center;
    gap: 56px;
  }
`;

export const HeaderFeedback = styled.div`
  h2 {
    color: var(--color-green-5);
    margin-bottom: 23px;
  }
  p {
    color: var(--black-color);
    font-size: 18px;
    max-width: 330px;
  }

  @media ${device.tablet} {
    p {
      font-size: 20px;
      max-width: 380px;
    }
  }
  @media ${device.laptopL} {
    margin-right: 48px;
  }
`;

export const PhoneLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: var(--color-green-5);
  color: var(--color-gray-3);
  font-size: 18px;
  width: 260px;
  height: 46px;
  cursor: pointer;
  transition: background 0.3s;

  @media ${device.tablet} {
    font-size: 24px;
    width: 360px;
    height: 64px;
  }

  @media ${device.laptopL} {
    font-size: 32px;
    width: 460px;
    height: 82px;
    margin-top: 30px;
  }

  &:hover {
    background-color: var(--color-green-4);
  }
`;
