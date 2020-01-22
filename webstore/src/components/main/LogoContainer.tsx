import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { StyledLogo } from '../../styles/root/RootStyles';
import { LOGO_SVG, ORDER, ORDER_ROUTE } from '../../constants/constants';
import svgResizer from '../../utilities/svgResizer';
import { ReactComponent as Logo } from '../../static/logo_header.svg';

const ResizedLogo = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const display = useSelector((state: any) => state.displayReducer.display);
  const order = useSelector((state: any) => state.displayReducer.order);
  const { iconWidth, iconHeight } = svgResizer(display, LOGO_SVG);

  function goToOrder() {
    history.push(ORDER_ROUTE);
  }

  return (
    <StyledLogo
      order={order}
      component={
        <Logo
          height={iconHeight}
          width={iconWidth}
          onClick={() => display.isPortrait ? null : goToOrder()}
        />
      } />
  );
};

export default ResizedLogo;
