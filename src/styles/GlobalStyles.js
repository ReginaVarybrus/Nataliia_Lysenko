import styled, { createGlobalStyle } from 'styled-components';
import { device } from '@/constants/mediaQueries';
import { AnimatedStyles } from './animations';
export const GlobalStyles = createGlobalStyle`
  ${AnimatedStyles}

:root {
  --color-success: #33d844;
  --color-error: #d83333;
  --color-info: #569aff;

  --white-color: #ffffff;
  --white-color-second: #F4F4F4;
  --black-color: #262626;

  --color-brand-orange: #AA2909;
  --color-orange-1: #F2E9E4;
  --color-orange-2: #F3AE3C;
  --color-orange-3: #F57A18;
  --color-orange-4: #E24F03;
  --color-orange-5: #D3370E;

  --color-green-1: #C8C65D;
  --color-green-2: #728F15;
  --color-green-3: #225E21;
  --color-green-4: #25430F;
  --color-green-5: #0E1B08;
--color-gray: #626161;
  --color-border-red: #980000;
  --color-background-1: #f2e9e4;
  --color-background-2: #e2dad5;
  --color-brand-transparent: rgba(170, 41, 9, 0.92);
}

*, *::before, *::after {
   box-sizing: border-box;
}

body {
  font-family: "Nunito Sans", serif;
  margin: 0;
  user-select: none;
}

html {
   scroll-behavior: smooth;
 }

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li{
    list-style: none;
    margin: 0;
    padding: 0;
    text-decoration: none;
}

h1,h2,h3,h4,h5,h6,p{
  margin: 0;
  padding: 0;
}

h1 {
  font-family: "Cormorant", serif;
  font-size: 57px;
  font-weight: 600;
  letter-spacing: -5%;
  line-height: 80%;
  text-transform: uppercase;
}

h2 { 
  font-family: "Cormorant", serif;
  font-size: 39px;
  font-weight: 600;
  line-height: 80%;
  letter-spacing: -5%;
  text-transform: uppercase;
}
// header for section
h3 {
 font-family: "Cormorant", serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 80%;
  letter-spacing: -5%;
  text-transform: uppercase;
}
// text content in section (main page)
h4 {
font-family: Nunito Sans;
font-size: 24px;
font-weight: 400;
line-height: 120%;
}

h5 {
}

h6 {
} 

p {
  font-size: 18px;
line-height: 120%;
}

button {
cursor: pointer;
}

svg{
  margin: 0;
  padding: 0;
}

img {
  display: block;
  width: 100%;
  height: auto;
}
  
a {
  text-decoration: none;
  display: block;
}
// =====================================TABLET========================================
  @media ${device.tablet} {

  p {
  font-size: 18px;
}  
  h1{ 
  font-size: 100px;
line-height: 80%;
  }
h2 {
  font-size: 56px;
}


  // =================desctop==============================
   @media ${device.laptop} {

  
  p {
  font-size: 24px;
}  
  h1{ 
  font-size: 140px;
line-height: 80%;
  }
h2 {
  font-size: 96px;
}

  }

`;
export const Container = styled.div`
  width: 100%;
  padding: 0 16px;
  margin: 0 auto;

  @media ${device.tablet} {
    max-width: 700px;
    padding: 0 20px;
  }

  @media ${device.laptop} {
    max-width: 900px;
  }

  @media ${device.laptopL} {
    max-width: 1200px;
  }
`;
