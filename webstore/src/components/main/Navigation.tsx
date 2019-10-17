import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CART_SVG, PROFILE } from '../../constants/constants';
import { useHistory } from 'react-router-dom';
import { updateLocation } from '../../redux/location/actions';
import { ReactComponent as CartIcon } from '../../static/cart.svg';
import { StyledCartIcon } from '../../styles/root/RootStyles';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import svgResizer from '../../utilities/svgResizer';

export const ConditionalProfileLink = () => {
  const order = useSelector((state: any) => state.orderReducer.order);
  const display = useSelector((state: any) => state.displayReducer.display);
  let history = useHistory();
  let linkHolder = null;
  const dispatch = useDispatch();
  const { iconWidth, iconHeight } = svgResizer(display, CART_SVG);

  const handleClick = () => {
    dispatch(updateLocation(PROFILE));
    setTimeout(() => history.push("/checkout/shipping-details"), 1000);
  };

  if (order.totalCount < 5) {
    linkHolder = null;
  } else {
    linkHolder =
      <StyledCartIcon
        width={iconWidth}
        height={iconHeight}
        onClick={handleClick}
      />;
  }
  return (
    linkHolder
  );
};
