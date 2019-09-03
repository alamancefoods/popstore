import React, { useContext }from 'react';
import { dynamicViewBox } from '../../utilities/SVGResizers';
import { StyledLogoDiv, StyledLogo } from '../../styles/root/RootStyles';
import { LOGO_SVG } from '../../constants/constants';
import { ThemeContext } from 'styled-components';

const LogoContainer = () => {

  const themeContext = useContext(ThemeContext);
  const logoViewBox = () => {
    let scale = themeContext.windowWidth * 0.2
    return `0 0 ${scale} ${scale}`
  }

  return (
    <StyledLogoDiv><StyledLogo viewBox={logoViewBox()} /></StyledLogoDiv>
  )
}

export default LogoContainer;
