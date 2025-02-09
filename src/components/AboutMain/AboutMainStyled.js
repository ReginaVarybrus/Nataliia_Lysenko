import styled from 'styled-components';

export const AboutMainStyled = styled.section`
  width: 100%;
  background-color: var(--color-background-2);
  padding: 60px 0;
`;

export const ContentAbout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    text-align: left;
  }
`;

export const ImageThumb = styled.div`
  width: 100%;
  max-width: 450px;
  aspect-ratio: 3/4;
  overflow: hidden;
  border-radius: 4.5px;

  img {
    width: 100%;
    height: 100%;

    object-fit: cover;
  }

  @media (min-width: 768px) {
    max-width: 350px;
  }
  @media (min-width: 1024px) {
    max-width: 437px;
  }
`;

export const TextBoxStyled = styled.div`
  max-width: 450px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 21px;

  h2 {
    color: var(--color-green-5);
  }

  p {
    color: var(--black-color);
    text-align: justify;
  }
  @media (min-width: 768px) {
    p {
      text-align: left;
    }
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    max-width: 350px;
  }
`;
