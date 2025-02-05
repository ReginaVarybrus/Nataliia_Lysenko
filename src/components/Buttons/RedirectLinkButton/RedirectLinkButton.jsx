import React from 'react';

import { IconArrow, RedirectLinkStyled } from './RedirectLinkButtonStyled';

const RedirectLinkButton = ({ text, href }) => {
  const svg = '/images/icon.svg'; // Статический путь к файлу

  console.log(svg);

  return (
    <RedirectLinkStyled href={href}>
      {text}
      <IconArrow>
        <use xlinkHref={`${svg}#icon-arrow-btn`} />
      </IconArrow>
    </RedirectLinkStyled>
  );
};

export default RedirectLinkButton;
