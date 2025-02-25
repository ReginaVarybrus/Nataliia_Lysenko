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
    <AboutMainStyled className="section">
      <Container>
        <ContentAbout>
          <ImageThumb className="animated fade-in-left scale-up">
            <img src={img} alt="Profile" />
          </ImageThumb>

          <TextBoxStyled className="animated fade-in-right">
            <h2 className="animated fade-in-right">About Me</h2>
            <RedirectLinkButton href={'/'} text={'more information'} />
            <p className="animated fade-in-right">
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
