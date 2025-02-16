import { IconArrow, RedirectLinkStyled } from './RedirectLinkButtonStyled';

const RedirectLinkButton = ({ text, href }) => {
  //============Need to fix paths for importing icons===================//
  const svg = `${import.meta.env.BASE_URL}images/icon.svg`;

  // console.log(svg);

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
