import styled from 'styled-components';

export const ReviewStyled = styled.section`
  width: 100%;
  background-color: var(--color-background-2);
  padding-top: 51px;
  padding-bottom: 51px;
`;

export const HeaderReviews = styled.div`
  margin-bottom: 28px;
  h2 {
    color: var(--color-green-5);
    margin-bottom: 8px;
  }
  p {
    font-size: 22px;
    color: var(--black-color);
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: -5%;
  }
  @media (min-width: 768px) {
    margin-bottom: 58px;
    h2 {
      margin-bottom: 21px;
    }
    p {
      font-size: 40px;
    }
  }
`;
export const ReviewCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  padding: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 36px;
    align-items: start;
  }

  @media (min-width: 1024px) {
    gap: 67px;
  }
`;
export const ImageThumb = styled.div`
  width: 280px;
  aspect-ratio: 1/1;
  overflow: hidden;
  border-radius: 4.5px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (min-width: 1024px) {
    // max-width: 412px;
    width: 412px;
    height: 450px;
  }
`;
export const TextBoxStyled = styled.div`
  max-width: 100%;

  p {
    font-size: 16px;
    line-height: 1.5;
    text-align: justify;
  }

  @media (min-width: 768px) {
    width: 424px;
    p {
      font-size: 18px;
      text-align: left;
    }
  }

  @media (min-width: 1024px) {
    p {
      font-size: 24px;
    }
  }
`;

export const RatingStars = styled.div`
  display: flex;
  gap: 5px;
  margin-bottom: 8px;
  svg {
    width: 16px;
    height: 16px;
  }

  @media (min-width: 768px) {
    svg {
      width: 22px;
      height: 22px;
    }
  }

  @media (min-width: 1024px) {
    margin-bottom: 18px;
    gap: 18px;
    svg {
      width: 30px;
      height: 30px;
    }
  }
`;

export const SwiperCustomStyles = styled.div`
  .swiper-button-prev::after,
  .swiper-button-next:after {
    color: var(--color-gray);
    font-size: 20px;
  }

  .swiper-button-prev:hover,
  .swiper-button-next:hover {
    color: var(--color-green-5);
  }

  .swiper-pagination-bullet {
    background-color: var(--color-gray);

    opacity: 1;
  }

  .swiper-pagination-bullet-active {
    background-color: var(--color-green-5);
  }

  .swiper-pagination {
    position: relative !important;
    margin-top: 20px;
  }

  @media (min-width: 768px) {
    .swiper-button-prev::after,
    .swiper-button-next:after {
      font-size: 40px;
    }
  }
`;
