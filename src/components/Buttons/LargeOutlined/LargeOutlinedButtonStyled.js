import { device } from '@/constants/mediaQueries';
import styled from 'styled-components';

export const LargeOutlinedButtonStyled = styled.button`
  padding: 12px 24px;
  border-radius: 8px;
  border: none;

  font-size: 16px;
  background-color: transparent;
  white-space: nowrap;
  cursor: pointer;
  transition: all 280ms ease-in-out;
  ${({ $mobilestyles }) => $mobilestyles};
  color: ${({ $isActive }) =>
    $isActive ? 'var(--color-brand-orange)' : 'var(--black-color)'};

  &:hover {
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.2);
  }

  @media ${device.tablet} {
    line-height: 19.2px;
    ${({ $desktopstyles }) => $desktopstyles};
  }
`;
