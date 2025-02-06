import React from 'react';
import { Intro } from '../../components/Intro/Intro';
import { Achievemets } from '../../components/Achievements/Achievemets';

import { MainRouteStyled } from './HomePageStyled';
import Services from '../../components/Services/Services';
import AboutMain from '../../components/AboutMain/AboutMain';
import PriceMain from '../../components/PriceMain/PriceMain';
import Review from '../../components/Review/Review';

const MainRoute = () => {
  return (
    <MainRouteStyled>
      <Intro />
      <Achievemets />
      <Services />
      <AboutMain />
      <PriceMain />
      <Review />
    </MainRouteStyled>
  );
};

export default MainRoute;
