import styled from 'styled-components';
// import { device } from '@/constants/mediaQueries';
import { NavLink } from 'react-router-dom';

export const HeaderStyled = styled.header`
  background-color: var(--color-orange-1);

  width: 100%;
  padding: 4px 16px;
`;

export const HeaderContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 900px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  width: 43px;
  height: 43px;

  @media (min-width: 768px) {
    width: 60px;
    height: 60px;
  }
`;

export const LangButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  @media (min-width: 768px) {
    gap: 24px;
  }
`;

export const Button = styled.button`
  background: none;
  border: none;
  font-size: 16px;
  transition: 0.3s ease-in-out;

  &.active {
    color: var(--color-brand-orange);
  }
`;

export const BurgerMenuBtn = styled.button`
  display: block;
  background: none;
  border: none;
  height: 27px;
  width: 27px;
  overflow: visible;
  position: relative;
  z-index: 2;
  cursor: pointer;

  span,
  span::before,
  span::after {
    background: var(--color-brand-orange);
    content: '';
    display: block;
    height: 2px;
    width: 27px;
    position: absolute;
    transition: 0.5s ease-in-out;
  }

  span::before {
    top: -10px;
  }

  span::after {
    top: 10px;
  }

  &.open span {
    background: transparent;
  }

  &.open span::before {
    transform: rotate(45deg);
    top: 0;
  }

  &.open span::after {
    transform: rotate(-45deg);
    top: 0;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const Nav = styled.nav`
  position: absolute;
  top: -100%;
  left: 0;
  width: 100%;
  background-color: var(--color-brand-transparent);
  transition: 0.5s ease-in-out;
  display: flex;
  justify-content: center;

  z-index: 2;
  padding: 40px;

  &.open {
    top: 51px;
  }

  @media (min-width: 768px) {
    position: initial;
    width: auto;
    background-color: transparent;
    display: flex;
    top: auto;
    padding: 0;
  }
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: var(--black-color);
  font-weight: 600;
  text-shadow: 0px 0px 10px rgba(254, 254, 254, 0.95);
  font-size: 20px;
  text-align: center;
  &.active {
    color: var(--color-background-1);
  }

  @media (min-width: 768px) {
    font-size: 16px;
    font-weight: 400;

    &.active {
      color: var(--color-border-red);
    }
  }
`;
