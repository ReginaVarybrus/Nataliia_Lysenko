import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { Container } from '@styles/GlobalStyles';
import {
  HeaderReviews,
  ReviewStyled,
  ImageThumb,
  ReviewCard,
  TextBoxStyled,
  SwiperCustomStyles,
  RatingStars,
} from './ReviewStyled';
import review1Img from '@assets/images/reviewer/review1.png';
import review2Img from '@assets/images/reviewer/review2.png';
import review3Img from '@assets/images/reviewer/review3.png';

const svg = `${import.meta.env.BASE_URL}images/icon.svg`;

const reviews = [
  {
    name: 'Elena',
    image: review1Img,
    rating: 5,
    text: 'Natasha, thank you so much for the comprehensive approach and professionalism. I am very happy with the result. Your anti-cellulite massage and lymphatic drainage are just top-level. I also really liked that you gave practical advice for at-home care, as well as great recipes for proper nutrition. Additionally, my back has almost stopped hurting. I highly recommend you!!!',
  },
  {
    name: 'Makaila',
    image: review2Img,
    rating: 5,
    text: 'I can trust my most treasured asset only to Natalia and her golden hands. My face is like a business card for me, and for a very long time, I couldn’t let anyone near it because almost all masters seem to have hands growing from a certain well-known place. But I allow Natalia to do anything with my face; even energetically, she suits me perfectly. And it’s pure magic — the double chin disappears, cheekbones become defined.',
  },
  {
    name: 'Diana',
    image: review3Img,
    rating: 5,
    text: 'Dear Natasha,Thank you for everything Thank you for appearing in my life, not only for the amazing signature massages but for everything in general. Visiting you is always a pleasure for me',
  },
];

const Review = () => {
  return (
    <ReviewStyled>
      <Container>
        <HeaderReviews>
          <h2>Reviews</h2>
          <p>My satisfied clients</p>
        </HeaderReviews>
        <SwiperCustomStyles>
          <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
          >
            {reviews.map(review => (
              <SwiperSlide key={review.name}>
                <ReviewCard>
                  <ImageThumb>
                    <img src={review.image} alt={review.name} />
                  </ImageThumb>
                  <TextBoxStyled>
                    <RatingStars>
                      {Array.from({ length: review.rating }).map((_, index) => (
                        <svg key={index}>
                          <use xlinkHref={`${svg}#icon-reviewstar`} />
                        </svg>
                      ))}
                    </RatingStars>
                    <p>{review.text}</p>
                  </TextBoxStyled>
                </ReviewCard>
              </SwiperSlide>
            ))}
          </Swiper>
        </SwiperCustomStyles>
      </Container>
    </ReviewStyled>
  );
};

export default Review;
