import React, { useContext }from 'react';
import { dynamicViewBox } from '../../utilities/SVGResizers';
import { StyledLogoDiv, StyledLogo } from '../../styles/root/RootStyles';
import { LOGO_SVG } from '../../constants/constants';
import { ThemeContext } from 'styled-components';

const LogoContainer = () => {
  const inheritedTheme = useContext(ThemeContext);
  const logoViewBox = dynamicViewBox(
    LOGO_SVG,
    inheritedTheme.deviceType,
  )

  return (
    <StyledLogoDiv><StyledLogo viewBox={logoViewBox} /></StyledLogoDiv>
  )
}

export default LogoContainer;
