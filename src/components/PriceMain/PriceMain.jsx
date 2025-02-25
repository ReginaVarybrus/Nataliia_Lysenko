import { Container } from '@styles/GlobalStyles';
import {
  PriceMainStyled,
  HeaderPrice,
  PriceGrid,
  PriceCard,
  MediaWrapper,
  FooterCard,
  FooterButton,
  NameServices,
} from './PriceMainStyled';
import faceImg from '@/assets/images/prices/face.jpeg';
import backImg from '@/assets/images/prices/back.jpeg';
import artImg from '@/assets/images/prices/art.jpeg';
import RedirectLinkButton from '../Buttons/RedirectLinkButton/RedirectLinkButton';
import serviceVideo from '@/assets/video/video.mp4';

const pricesData = [
  {
    title: 'Face Massage',
    img: faceImg,
    video: serviceVideo,
    link: '/',
    price: 80,
  },
  {
    title: 'Back massage',
    img: backImg,
    video: serviceVideo,
    link: '/',
    price: 80,
  },
  {
    title: 'Art therapy',
    img: artImg,
    video: serviceVideo,
    link: '/',
    price: 70,
  },
];

// const PriceMain = () => {
//   const svg = `${import.meta.env.BASE_URL}images/icon.svg`;

//   return (
//     <PriceMainStyled>
//       <Container>
//         <HeaderPrice className="animated fade-in-left">
//           <h2 className="animated fade-in-left">Price</h2>
//           <RedirectLinkButton href={'/'} text={'All services & Prices'} />
//           <p className="animated fade-in-left">
//             Go to the all Services & Prices page and find out the cost of the
//             different procedures
//           </p>
//         </HeaderPrice>

//         <PriceFlex className="animated fade-in-up">
//           {pricesData.map((price, index) => (
//             <PriceCard key={index} className="animated fade-in-up">
//               <MediaCard>
//                 <div className="media">
//                   <img src={price.img} alt={price.title} className="image" />
//                   <video
//                     className="video"
//                     src={price.video}
//                     muted
//                     loop
//                     autoPlay
//                     playsInline
//                   ></video>
//                 </div>
//                 <FooterCard className="animated fade-in-left">
//                   <h3>Reservation</h3>
//                   <FooterButton>
//                     <svg>
//                       <use xlinkHref={`${svg}#icon-arrowSmall`} />
//                     </svg>
//                   </FooterButton>
//                 </FooterCard>
//               </MediaCard>

//               <NameServices>
//                 <h4>{price.title}</h4>
//                 <p>{price.price}$</p>
//               </NameServices>
//             </PriceCard>
//           ))}
//         </PriceFlex>
//       </Container>
//     </PriceMainStyled>
//   );
// };

// export default PriceMain;

const PriceMain = () => {
  const svg = `${import.meta.env.BASE_URL}images/icon.svg`;

  return (
    <PriceMainStyled className="section">
      <Container>
        <HeaderPrice className="animated fade-in-left">
          <h2>Price</h2>
          <RedirectLinkButton href={'/'} text={'All services & Prices'} />
          <p>
            Go to the all Services & Prices page and find out the cost of the
            different procedures
          </p>
        </HeaderPrice>

        <PriceGrid className="animated fade-in-up">
          {pricesData.map((price, index) => (
            <PriceCard key={index} className="animated fade-in-up">
              <MediaWrapper>
                <div className="media">
                  <img src={price.img} alt={price.title} className="image" />
                  <video
                    className="video"
                    src={price.video}
                    muted
                    loop
                    autoPlay
                    playsInline
                  ></video>
                </div>
                <FooterCard>
                  <h3>Reservation</h3>
                  <FooterButton>
                    <svg>
                      <use xlinkHref={`${svg}#icon-arrowSmall`} />
                    </svg>
                  </FooterButton>
                </FooterCard>
              </MediaWrapper>

              <NameServices>
                <h4>{price.title}</h4>
                <p>{price.price}$</p>
              </NameServices>
            </PriceCard>
          ))}
        </PriceGrid>
      </Container>
    </PriceMainStyled>
  );
};

export default PriceMain;
