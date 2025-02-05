import RedirectLinkButton from '../Buttons/RedirectLinkButton/RedirectLinkButton';
import { SectionStyled } from './ServicesStyled';

const Services = () => {
  return (
    <SectionStyled>
      <h2>Services</h2>
      <RedirectLinkButton href={'/'} text={'Click to know more'} />
      <h4>
        I have many skills and hundreds of procedures in my arsenal, go to the
        Services & Prices page to find the right one for you{' '}
      </h4>
    </SectionStyled>
  );
};

export default Services;
