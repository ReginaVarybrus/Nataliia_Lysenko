import { Container } from '@styles/GlobalStyles';
import RedirectLinkButton from '../Buttons/RedirectLinkButton/RedirectLinkButton';
import {
  HeaderServices,
  ServiceCard,
  ServicesGrid,
  ServicesStyled,
} from './ServicesStyled';

import therapyImg from '@/assets/images/ServiceSection/aroma.jpg';
import wrappingImg from '@/assets/images/ServiceSection/Aromatherapy.jpg';
import massageImg from '@/assets/images/ServiceSection/Massage.jpg';
import bodyCareImg from '@/assets/images/ServiceSection/olive.jpg';

import serviceVideo from '@/assets/video/video.mp4';

const servicesData = [
  {
    title: 'Therapy',
    img: therapyImg,
    video: serviceVideo,
    link: '/',
  },
  {
    title: 'Wrapping',
    img: wrappingImg,
    video: serviceVideo,
    link: '/',
  },
  {
    title: 'Massage',
    img: massageImg,
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
  return (
    <ServicesStyled>
      <Container>
        <HeaderServices>
          <h2>Services</h2>
          <RedirectLinkButton href={'/'} text={'Click to know more'} />
          <p>
            I have many skills and hundreds of procedures in my arsenal, go to
            the Services & Prices page to find the right one for you{' '}
          </p>
        </HeaderServices>

        <ServicesGrid>
          {servicesData.map((service, index) => (
            <ServiceCard key={index}>
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
              <div className="card-content">
                <h3>{service.title}</h3>
                <RedirectLinkButton href={'/'} />
              </div>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </Container>
    </ServicesStyled>
  );
};

export default Services;
