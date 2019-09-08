import React, { useContext }from 'react';
import { dynamicViewBox } from '../../utilities/SVGResizers';
import { StyledLogo } from '../../styles/root/RootStyles';
import { LOGO_SVG } from '../../constants/constants';
import { ThemeContext } from 'styled-components';

const ResizedLogo= () => {

  const themeContext = useContext(ThemeContext);
  const logoViewBox = () => {
    let scale = (Math.sqrt(themeContext.windowWidth) / 2) + 100
    if(themeContext.isPortrait){
      scale = (Math.sqrt(themeContext.windowWidth)) + 100
    }else{
      scale = (-themeContext.windowWidth * 0.09) + 160
    }
    return `0 0 ${scale} ${scale}`
  }

  return (
    <StyledLogo width="100%" height="150%" onClick={()=> console.log(logoViewBox()) } />
  )
}

export default ResizedLogo;
