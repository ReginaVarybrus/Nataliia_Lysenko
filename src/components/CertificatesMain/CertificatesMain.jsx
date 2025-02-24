import img from '@/assets/images/certificates/certificates.jpg';
import {
  CertificatesStyles,
  ContentStyles,
  HeaderCertificates,
  ImageThumb,
  Placeholder,
  AsideStyles,
} from './CertificatesMainStyles';
import { Container } from '@mui/material';
import RedirectLinkButton from '../Buttons/RedirectLinkButton/RedirectLinkButton';

const CertificatesMain = () => {
  return (
    <CertificatesStyles className="section">
      <Container>
        <HeaderCertificates className="animated fade-in-left">
          Gift Certificates
        </HeaderCertificates>
        <ContentStyles className="animated fade-in-left">
          <AsideStyles>
            <RedirectLinkButton href={'/'} text={'Click to know more'} />
            <p className="animated fade-in-left">
              The cost of the gift certificate depends on the selected procedure
            </p>
            <Placeholder className="animated fade-in-up" />
          </AsideStyles>
          <ImageThumb className="animated fade-in-up">
            <img src={img} alt="Gift Certificate" />
          </ImageThumb>
        </ContentStyles>
      </Container>
    </CertificatesStyles>
  );
};

export default CertificatesMain;
