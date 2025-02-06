import React from 'react';
import mainImg from '@/assets/images/main-img.png';
import {
  IntroStyled,
  IntroContent,
  Text,
  Circle,
  MainImage,
} from '@/components/Intro/IntroStyled';
import { ImageThumb } from './IntroStyled';

export const Intro = () => {
  return (
    <IntroStyled>
      <IntroContent>
        <h2>Nataliia</h2>
        <h1>Lysenko</h1>
        <Text>
          Who is a multifunctional therapist? That's me! Let's get to know each
          other!
        </Text>
      </IntroContent>
      <Circle></Circle>
      <ImageThumb>
        <MainImage src={mainImg} alt="main-img" />
      </ImageThumb>
    </IntroStyled>
  );
};
