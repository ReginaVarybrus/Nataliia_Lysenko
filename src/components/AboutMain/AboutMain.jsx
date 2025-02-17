import React from 'react';
import img from '@/assets/images/aboutSection.jpeg';
import { Container } from '@styles/GlobalStyles';
import {
  AboutMainStyled,
  ContentAbout,
  ImageThumb,
  TextBoxStyled,
} from './AboutMainStyled';
import RedirectLinkButton from '../Buttons/RedirectLinkButton/RedirectLinkButton';

const AboutMain = () => {
  return (
    <AboutMainStyled>
      <Container>
        <ContentAbout>
          <ImageThumb>
            <img src={img} alt="Profile" />
          </ImageThumb>

          <TextBoxStyled>
            <h2>About Me</h2>
            <RedirectLinkButton href={'/'} text={'more information'} />
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat"
            </p>
          </TextBoxStyled>
        </ContentAbout>
      </Container>
    </AboutMainStyled>
  );
};

export default AboutMain;
