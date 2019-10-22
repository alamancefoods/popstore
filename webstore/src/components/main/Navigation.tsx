import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { updateLocation } from '../../redux/location/actions';
import { CART_SVG, PROFILE, PROFILE_ROUTE } from '../../constants/constants';
import { ReactComponent as CartIcon } from '../../static/cart.svg';
import { StyledCartIcon } from '../../styles/root/RootStyles';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import svgResizer from '../../utilities/svgResizer';

export const ConditionalProfileLink = () => {
  const order = useSelector((state: any) => state.orderReducer.order);
  const display = useSelector((state: any) => state.displayReducer.display);
  const dispatch = useDispatch();
  const history = useHistory();
  const { iconWidth, iconHeight } = svgResizer(display, CART_SVG);

  function locationTransition() {
    dispatch(updateLocation(PROFILE));
    setTimeout(() => history.push(PROFILE_ROUTE, 1000));
  };

  return (
    <StyledCartIcon
      width={iconWidth}
      height={iconHeight}
      onClick={() => locationTransition()}
    />
  );
};
