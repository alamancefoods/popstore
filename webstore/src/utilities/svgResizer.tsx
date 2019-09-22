const svgResizer = (themeContext: any) => {
  let iconWidth = null;
  let iconHeight = null;
  if(themeContext.isPortrait){
    iconWidth = themeContext.windowWidth * 0.15;
    iconHeight = themeContext.windowHeight * 0.1;
  }else{
    iconWidth = themeContext.windowWidth * 0.1;
    iconHeight = themeContext.windowHeight * 0.1;
  }
  return { iconWidth, iconHeight };
}

export default svgResizer;
