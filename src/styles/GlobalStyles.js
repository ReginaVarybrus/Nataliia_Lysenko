import styled, { createGlobalStyle } from 'styled-components';
// import { device } from "@/constants/mediaQueries";

export const GlobalStyles = createGlobalStyle`
:root {
  --color-success: #33d844;
  --color-error: #d83333;
  --color-info: #569aff;

  --white-color: #ffffff;
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
  font-size: 140px;
  font-weight: 600;
  line-height: 112px;
  text-transform: uppercase;
}
//  sections header
h2 { 
  font-family: "Cormorant", serif;
  font-size: 96px;
  font-weight: 600;
  line-height: 76.8px;
  text-transform: uppercase;
}

h3 {
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
  font-size: 24px;
  line-height: 28.8px;
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
`;
export const Container = styled.div`
  width: 100%;
  padding: 0 10px;
  margin: 0 auto;

  @media (min-width: 480px) {
    padding: 0 15px;
  }

  @media (min-width: 768px) {
    max-width: 600px;
    padding: 0 20px;
  }

  @media (min-width: 1024px) {
    max-width: 900px;
  }

  @media (min-width: 1200px) {
    max-width: 1200px;
  }
`;
