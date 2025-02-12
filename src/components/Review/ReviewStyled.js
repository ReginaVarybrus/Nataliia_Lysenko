import styled from 'styled-components';

export const ReviewStyled = styled.section`
  width: 100%;
  background-color: var(--color-background-2);
  padding-top: 99px;
  padding-bottom: 99px;
`;

export const HeaderReviews = styled.div`
  h2 {
    color: var(--color-green-5);
    margin-bottom: 21px;
  }
  p {
    font-size: 40px;
    color: var(--black-color);
  }
`;
export const ReviewCard = styled.div`
  display: flex;
  flex-direction: row;
  gap: 67px;
`;
export const ImageThumb = styled.div`
  width: 412px;
  height: 450px;
`;
export const TextBoxStyled = styled.div`
  width: 424px;
  p {
    font-size: 24px;
    line-height: 120%;
  }
`;

export const SwiperCustomStyles = styled.div`
  .swiper-button-prev,
  .swiper-button-next {
    color: var(--color-gray);
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
`;
