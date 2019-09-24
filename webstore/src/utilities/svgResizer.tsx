const svgResizer = (display: any) => {
  let iconWidth = null;
  let iconHeight = null;
  if (display.isPortrait) {
    iconWidth = display.windowWidth * 0.15;
    iconHeight = display.windowHeight * 0.1;
  } else {
    iconWidth = display.windowWidth * 0.1;
    iconHeight = display.windowHeight * 0.1;
  }
  return { iconWidth, iconHeight };
}

export default svgResizer;
