import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { StyledLogo } from '../../styles/root/RootStyles';
import { LOGO_SVG, ORDER, ORDER_ROUTE } from '../../constants/constants';
import svgResizer from '../../utilities/svgResizer';
import { updateLocation } from '../../redux/location/actions';
import { useSelector } from 'react-redux';
import { ReactComponent as Logo } from '../../static/logo_header.svg';

const ResizedLogo = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const display = useSelector((state: any) => state.displayReducer.display);
  const order = useSelector((state: any) => state.displayReducer.order);
  const { iconWidth, iconHeight } = svgResizer(display, LOGO_SVG);

  function goToOrder() {
    dispatch(updateLocation(ORDER));
    console.log(display.windowWidth);
    setTimeout(() => history.push(ORDER_ROUTE), 100);
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
