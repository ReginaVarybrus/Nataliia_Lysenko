import styled from 'styled-components';

export const IntroStyled = styled.div`
  width: 100%;
  padding: 0 10px;
  margin: 0 auto;

  position: relative;
  display: flex;
  flex-direction: column-reverse;
  gap: 10px;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: var(--color-orange-1);
  color: var(--color-green-5);

  height: 100vh;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const IntroContent = styled.div`
  // height: 100%;
  // width: 561px;
  // padding: 107px 0 0 70px;
  z-index: 1;
`;

export const Text = styled.p`
  padding-top: 10px;
  width: 348px;

  @media (min-width: 768px) {
    padding-top: 51px;
    width: 370px;
  }

  @media (min-width: 1024px) {
    padding-top: 51px;
    width: 428px;
  }
`;

export const Circle = styled.div`
  position: absolute;
  top: 9px;
  left: 35%;
  transform: translate(-51%, 0);
  width: 250px;
  height: 250px;
  border: 1px solid var(--color-orange-4);
  border-radius: 50%;
  z-index: 0;

  @media (min-width: 768px) {
    width: 432px;
    height: 432px;
    left: 45%;
  }
`;

export const ImageThumb = styled.div`
  // position: relative;
  width: 290px;
  height: 342px;
  z-index: 1;

  @media (min-width: 768px) {
    width: 450px;
    height: 530px;
  }

  @media (min-width: 1024px) {
    width: 596px;
    height: 722px;
  }
`;

export const MainImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  z-index: 1;
`;
