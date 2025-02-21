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
import useScrollAnimation from '../../hooks/useScrollAnimation';

export const Intro = () => {
  useScrollAnimation();
  return (
    <IntroStyled className="section">
      <IntroContent className="animated fade-in-left">
        <h2>Nataliia</h2>
        <h1>Lysenko</h1>
        <Text className="animated fade-in-left">
          Who is a multifunctional therapist? That's me! Let's get to know each
          other!
        </Text>
      </IntroContent>
      <Circle viewBox="0 0 200 200" className="animated scale-up">
        <circle cx="100" cy="100" r="98" />
      </Circle>
      <ImageThumb className="animated fade-in-up">
        <MainImage src={mainImg} alt="main-img" />
      </ImageThumb>
    </IntroStyled>
  );
};
