import certificatesImg from '@/assets/images/certificates/certificates1.jpg';
import img from '@/assets/images/certificates/certificates.jpg';
import {
  CertificatesStyles,
  ContentStyles,
  HeaderCertificates,
  ImageThumb,
  AsideStyles,
  ContentBlock,
  SmallImg,
} from './CertificatesMainStyles';
import { Container } from '@styles/GlobalStyles';
import RedirectLinkButton from '../Buttons/RedirectLinkButton/RedirectLinkButton';

const CertificatesMain = () => {
  return (
    <CertificatesStyles className="section">
      <Container>
        <ContentBlock>
          <HeaderCertificates className="animated fade-in-left">
            Gift Certificates
          </HeaderCertificates>
          <ContentStyles className="animated fade-in-left">
            <AsideStyles>
              <RedirectLinkButton href={'/'} text={'Click to know more'} />
              <p className="animated fade-in-left">
                The cost of the gift certificate depends on the selected
                procedure
              </p>
              <SmallImg className="animated fade-in-up">
                <img src={certificatesImg} alt="Gift Certificate" />
              </SmallImg>
            </AsideStyles>
            <ImageThumb className="animated fade-in-up">
              <img src={img} alt="Gift Certificate" />
            </ImageThumb>
          </ContentStyles>
        </ContentBlock>
      </Container>
    </CertificatesStyles>
  );
};

export default CertificatesMain;
