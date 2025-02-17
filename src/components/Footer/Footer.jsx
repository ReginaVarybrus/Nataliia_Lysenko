import { Container } from '@styles/GlobalStyles';
import logo from '@/assets/images/logo2.svg';

import {
  ContactLinks,
  ContentFooter,
  FooterStyled,
  LogoSectionFooter,
  NavLinks,
} from './FooterStyled';

// ==============NEED ADD HREF LINK=======================

const Footer = () => {
  return (
    <FooterStyled>
      <Container>
        <ContentFooter>
          <NavLinks>
            <a href="/">Home</a>
            <a href="/about">About me</a>
            <a href="/price">Services & Prices</a>
            <a href="/">Gallery</a>
            <a href="/events">Events</a>
            <a href="/">Cosmetics</a>
          </NavLinks>

          <LogoSectionFooter>
            <img src={logo} alt="logo" />
            <h2>Nataliia Lysenko</h2>
          </LogoSectionFooter>

          <ContactLinks>
            <a href="tel:+380600004578">+38 060 000 45 78</a>
            <a href="" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              TikTok
            </a>
          </ContactLinks>
        </ContentFooter>
      </Container>
    </FooterStyled>
  );
};

export default Footer;
