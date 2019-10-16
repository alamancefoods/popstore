import { LOGO_SVG, BUTTON_SVG, PLUS_SVG, MINUS_SVG, CART_SVG } from '../constants/constants';

const svgResizer = (display: any, svgType: string) => {
  let iconWidth = null;
  let iconHeight = null;
  switch (svgType) {
    case BUTTON_SVG:
      if (display.isPortrait) {
        iconWidth = display.windowWidth * 0.15;
        iconHeight = display.windowHeight * 0.1;
      } else {
        iconWidth = display.windowWidth * 0.15;
        iconHeight = display.windowHeight * 0.15;
      }
      break;
    case LOGO_SVG:
      if (display.isPortrait) {
        iconWidth = display.windowWidth * 0.5;
        iconHeight = display.windowHeight * 0.1;
      } else {
        iconWidth = display.windowWidth * 0.3;
        iconHeight = display.windowHeight * 0.17;
      }
      break;
    case PLUS_SVG:
      if (display.isPortrait) {
        iconWidth = display.windowWidth * 0.05;
        iconHeight = display.windowHeight * 0.05;
      } else {
        iconWidth = display.windowWidth * 0.06;
        iconHeight = display.windowHeight * 0.06;
      }
      break;
    case MINUS_SVG:
      if (display.isPortrait) {
        iconWidth = display.windowWidth * 0.04;
        iconHeight = display.windowHeight * 0.04;
      } else {
        iconWidth = display.windowWidth * 0.03;
        iconHeight = display.windowHeight * 0.03;
      }
      break;
    case CART_SVG:
      if (display.isPortrait) {
        iconWidth = display.windowWidth * 0.10;
        iconHeight = display.windowHeight * 0.06;
      } else {
        iconWidth = display.windowWidth * 0.06;
        iconHeight = display.windowHeight * 0.06;
      }
      break;
    default:
      iconWidth = display.windowWidth;
      iconHeight = display.windowHeight;
      break;
  }
  return { iconWidth, iconHeight };
};

export default svgResizer;
