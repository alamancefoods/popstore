import React, { useContext } from 'react';
import { StyledLogo } from '../../styles/root/RootStyles';
import { LOGO_SVG } from '../../constants/constants';
import { ThemeContext } from 'styled-components';

const ResizedLogo = () => {
  return (
    <StyledLogo width="100%" height="150%" />
  );
}

export default ResizedLogo;
