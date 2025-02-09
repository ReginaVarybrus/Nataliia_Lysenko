import { Container } from '@styles/GlobalStyles';
import RedirectLinkButton from '../Buttons/RedirectLinkButton/RedirectLinkButton';
import {
  ContentBoxStyled,
  ImagesBoxStyled,
  ImageThumb,
  ServicesStyled,
} from './ServicesStyled';

const Services = () => {
  return (
    <ServicesStyled>
      <Container>
        <ContentBoxStyled>
          <h2>Services</h2>
          <RedirectLinkButton href={'/'} text={'Click to know more'} />
          <h4>
            I have many skills and hundreds of procedures in my arsenal, go to
            the Services & Prices page to find the right one for you{' '}
          </h4>
        </ContentBoxStyled>

        <ImagesBoxStyled>
          <ImageThumb></ImageThumb>
          <ImageThumb></ImageThumb>
        </ImagesBoxStyled>
      </Container>
    </ServicesStyled>
  );
};

export default Services;
