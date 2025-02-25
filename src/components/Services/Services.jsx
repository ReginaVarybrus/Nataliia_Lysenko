import { Container } from '@styles/GlobalStyles';
import RedirectLinkButton from '../Buttons/RedirectLinkButton/RedirectLinkButton';
import {
  FooterButton,
  FooterCard,
  HeaderServices,
  ServiceCard,
  ServicesFlex,
  ServicesStyled,
} from './ServicesStyled';

import therapyImg from '@/assets/images/ServiceSection/aroma.jpg';

import bodyCareImg from '@/assets/images/ServiceSection/olive.jpg';

import serviceVideo from '@/assets/video/video.mp4';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const servicesData = [
  {
    title: 'Aromatherapy',
    img: therapyImg,
    video: serviceVideo,
    link: '/',
  },
  {
    title: 'Body Care',
    img: bodyCareImg,
    video: serviceVideo,
    link: '/',
  },
];

const Services = () => {
  useScrollAnimation();
  const svg = `${import.meta.env.BASE_URL}images/icon.svg`;

  return (
    <ServicesStyled className="section">
      <Container>
        <HeaderServices className="animated fade-in-left">
          <h2 className="animated fade-in-left">Services</h2>
          <RedirectLinkButton href={'/'} text={'Click to know more'} />
          <p className="animated fade-in-left">
            I have many skills and hundreds of procedures in my arsenal, go to
            the Services & Prices page to find the right one for you{' '}
          </p>
        </HeaderServices>

        <ServicesFlex className="animated fade-in-up">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} className="animated fade-in-up">
              <div className="media">
                <img src={service.img} alt={service.title} className="image" />
                <video
                  className="video"
                  src={service.video}
                  muted
                  loop
                  autoPlay
                  playsInline
                ></video>
              </div>
              <FooterCard className="animated fade-in-left">
                <h3>{service.title}</h3>
                <FooterButton>
                  <svg>
                    <use xlinkHref={`${svg}#icon-arrowSmall`} />
                  </svg>
                </FooterButton>
              </FooterCard>
            </ServiceCard>
          ))}
        </ServicesFlex>
      </Container>
    </ServicesStyled>
  );
};

export default Services;
