import styled from 'styled-components';

export const FooterStyled = styled.footer`
  width: 100%;
  background-color: var(--color-brand-orange);
  padding-top: 50px;
  padding-bottom: 50px;
`;

export const ContentFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 24px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
`;

export const NavLinks = styled.div`
  a {
    color: var(--white-color-second);
    font-size: 16px;
  }

  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (min-width: 768px) {
    gap: 24px;
  }
`;

export const LogoSectionFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;

  img {
    width: 100%;
    max-width: 204px;
    min-width: 150px;
    height: auto;
    max-height: 200px;
    min-height: 150px;
    object-fit: contain;
  }

  h2 {
    color: var(--white-color);
    font-size: clamp(24px, 4vw, 48px);
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
  }

  @media (min-width: 768px) {
    img {
      max-width: 180px;
      min-width: 130px;
    }
  }
  h2 {
    font-size: clamp(20px, 3.5vw, 36px);
  }
`;

export const ContactLinks = styled.div`
  a {
    color: var(--white-color-second);
    font-size: 16px;
  }

  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (min-width: 768px) {
    align-items: flex-end;
    gap: 24px;
  }
`;
