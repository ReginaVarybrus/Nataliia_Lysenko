import { Container } from '@styles/GlobalStyles';
import RedirectLinkButton from '../Buttons/RedirectLinkButton/RedirectLinkButton';
import { ServicesStyled } from './ServicesStyled';

const Services = () => {
  return (
    <ServicesStyled>
      <Container>
        <h2>Services</h2>
        <RedirectLinkButton href={'/'} text={'Click to know more'} />
        <h4>
          I have many skills and hundreds of procedures in my arsenal, go to the
          Services & Prices page to find the right one for you{' '}
        </h4>
      </Container>
    </ServicesStyled>
  );
};

export default Services;
