import React from 'react';
import logo from '@/assets/images/logo.svg';
import NavBar from '../NavigationBar/NavBar';
import { HeaderStyled, Logo, LangButtons, Button } from './HeaderStyled';

const Header = () => {
  return (
    <HeaderStyled>
      <Logo src={logo} alt="logo" width="60" height="60" />
      <NavBar />
      <LangButtons>
        <Button>Ukr</Button>
        <Button>Eng</Button>
      </LangButtons>
    </HeaderStyled>
  );
};

export default Header;
