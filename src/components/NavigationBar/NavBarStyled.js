import styled from 'styled-components';
import { device } from '@/constants/mediaQueries';

export const NavBarLayout = styled.nav`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  position: static;
  top: auto;
  transition: none;

  @media ${device.tablet} {
    display: ${({ $isMenuOpen }) => ($isMenuOpen ? 'flex' : 'none')};
    box-sizing: border-box;
    display: flex;
    top: 0;
    width: 100%;
    transition: top 0.4s;
  }
`;

// export const AnchorLink = styled.a`
//   display: none;

//   &:hover {
//     color: var(--color-brand-blue);
//   }
//   @media ${device.tablet} {
//     margin-right: 24px;
//     text-decoration: none;
//     line-height: 21.6px;
//     color: var(--color-dark);
//     display: block;
//     font-size: 18px;
//   }
// `;

export const MainPageNavRight = styled.div`
   display: flex;
   align-items: center;

    @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    text-align: center;
  }
}
`;

export const MainPageNavLeft = styled.div`
  display: flex;
  padding: 10px;
  @media ${device.tablet} {
    padding: 16px 0;
    align-items: center;
  }
`;
