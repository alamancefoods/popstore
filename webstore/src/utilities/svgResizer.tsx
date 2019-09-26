import { LOGO_SVG, BUTTON_SVG } from '../constants/constants';

const svgResizer = (display: any, svgType: string) => {
  let iconWidth = null;
  let iconHeight = null;
  switch (svgType) {
    case BUTTON_SVG:
      if (display.isPortrait) {
        iconWidth = display.windowWidth * 0.15;
        iconHeight = display.windowHeight * 0.1;
      } else {
        iconWidth = display.windowWidth * 0.1;
        iconHeight = display.windowHeight * 0.1;
      }
      break;
    case LOGO_SVG:
      if (display.isPortrait) {
        iconWidth = display.windowWidth * 0.35;
        iconHeight = display.windowHeight * 0.2;
      } else {
        iconWidth = display.windowWidth * 0.5;
        iconHeight = display.windowHeight * 0.15;
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
