import React from 'react';
import { Intro } from '../../components/Intro/Intro';
import { Achievemets } from '../../components/Achievements/Achievemets';

import { MainRouteStyled } from './MainRouteStyled';

const MainRoute = () => {
  return (
    <MainRouteStyled>
      <Intro />
      <Achievemets />
    </MainRouteStyled>
  );
};

export default MainRoute;
