import React, { useContext } from 'react';
import { StyledLogo } from '../../styles/root/RootStyles';
import { LOGO_SVG } from '../../constants/constants';
import svgResizer from '../../utilities/svgResizer';
import { useSelector } from 'react-redux';
import { ReactComponent as Logo } from '../../static/logo_header.svg';

const ResizedLogo = () => {
  const display = useSelector((state: any) => state.displayReducer.display);
  const { iconWidth, iconHeight } = svgResizer(display, LOGO_SVG);
  const order = useSelector((state: any) => state.orderReducer.order);

  return (
    <StyledLogo
      orderCount={order.totalCount}
      component={
        <Logo
          height={iconHeight}
          width={iconWidth}
        />
      } />
  );
};

export default ResizedLogo;
