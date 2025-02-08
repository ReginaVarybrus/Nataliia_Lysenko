import React, { useState } from 'react';
import logo from '@/assets/images/logo.svg';
import { routesPath } from '@routes/routesPath';
import {
  HeaderStyled,
  Logo,
  LangButtons,
  Button,
  HeaderContainer,
  BurgerMenuBtn,
  Nav,
  NavList,
  StyledNavLink,
} from './HeaderStyled';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('en');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLanguageChange = lang => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  return (
    <HeaderStyled>
      <HeaderContainer>
        <Logo src={logo} alt="logo" width="60" height="60" />
        <BurgerMenuBtn
          onClick={toggleMenu}
          className={isMenuOpen ? 'open' : ''}
        >
          <span></span>
        </BurgerMenuBtn>
        <Nav className={isMenuOpen ? 'open' : ''}>
          <NavList>
            <li>
              <StyledNavLink to={routesPath.HOME_PAGE} onClick={toggleMenu}>
                Home
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink to={routesPath.ABOUT} onClick={toggleMenu}>
                About me
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink to={routesPath.BODY_CARE} onClick={toggleMenu}>
                Services
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink to={routesPath.EVENTS} onClick={toggleMenu}>
                Events
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink to={routesPath.PRICE} onClick={toggleMenu}>
                Price
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="contacts">Contacts</StyledNavLink>
            </li>
          </NavList>
        </Nav>
        <LangButtons>
          <Button
            data-lang="uk"
            onClick={() => handleLanguageChange('uk')}
            className={language === 'uk' ? 'active' : ''}
          >
            Ukr
          </Button>
          <Button
            data-lang="uk"
            onClick={() => handleLanguageChange('en')}
            className={language === 'en' ? 'active' : ''}
          >
            Eng
          </Button>
        </LangButtons>
      </HeaderContainer>
    </HeaderStyled>
  );
};

export default Header;
