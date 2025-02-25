import { Intro } from '../../components/Intro/Intro';
import { Achievemets } from '../../components/Achievements/Achievemets';

import { MainRouteStyled } from './HomePageStyled';
import Services from '../../components/Services/Services';
import AboutMain from '../../components/AboutMain/AboutMain';
import PriceMain from '../../components/PriceMain/PriceMain';
import Review from '../../components/Review/Review';
import CertificatesMain from '../../components/CertificatesMain/CertificatesMain';
import FeedbackMain from '../../components/FeedbackMain/FeedbackMain';

const HomePage = () => {
  return (
    <MainRouteStyled>
      <Intro />
      <Achievemets />
      <Services />
      <AboutMain />
      <PriceMain />
      <Review />
      <CertificatesMain />
      <FeedbackMain />
    </MainRouteStyled>
  );
};

export default HomePage;
