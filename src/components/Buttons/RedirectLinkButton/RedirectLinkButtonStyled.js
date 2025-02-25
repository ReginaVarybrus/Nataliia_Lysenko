import styled from 'styled-components';
import { device } from '@/constants/MediaQueries';

export const RedirectLinkStyled = styled.a`
  font-family: Cormorant;
  font-size: 18px;
  font-weight: 700;
  line-height: 80%;
  text-decoration: none;
  color: var(--black-color);
  letter-spacing: -5%;
  text-transform: uppercase;
  border: 2px solid var(--color-border-red);
  border-radius: 33px;
  display: inline-flex;
  gap: 15px;
  align-items: center;
  padding: 15px 12px;

  @media ${device.tablet} {
    font-size: 24px;
  }
`;

export const IconArrow = styled.svg`
  width: 59px;
  height: 10px;
`;
