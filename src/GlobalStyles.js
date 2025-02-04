import { createGlobalStyle } from 'styled-components';
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
}

body {
  font-family: "Nunito Sans", serif;
  margin: 0;
  user-select: none;
  box-sizing: border-box;
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

h2 { 
  font-family: "Cormorant", serif;
  font-size: 96px;
  font-weight: 600;
  line-height: 76.8px;
  text-transform: uppercase;
}

h3 {
}

h4 {
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
}

svg{
  margin: 0;
  padding: 0;
}
`;
