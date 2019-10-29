import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { updateLocation } from '../../redux/location/actions';
import {
  CART_SVG, PROFILE, ORDER,
  CHECKOUT, ORDER_TO_PROFILE,
  CHECKOUT_TO_PROFILE
} from '../../constants/constants';
import { ReactComponent as CartIcon } from '../../static/cart.svg';
import { StyledCartIcon } from '../../styles/root/RootStyles';
import { LinkProps } from './styles';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import svgResizer from '../../utilities/svgResizer';

export const ConditionalLink = ({ location, route }: LinkProps) => {
  const order = useSelector((state: any) => state.orderReducer.order);
  const display = useSelector((state: any) => state.displayReducer.display);
  const dispatch = useDispatch();
  const history = useHistory();
  const { iconWidth, iconHeight } = svgResizer(display, CART_SVG);

  function locationTransition() {
    dispatch(updateLocation(location));
    console.log(route);
    console.log(order.totalCount);
    setTimeout(() => history.push(route), 1000);
  };

  switch (location) {
    case ORDER_TO_PROFILE:
      return (
        <StyledCartIcon
          width={iconWidth}
          height={iconHeight}
          onClick={() => locationTransition()}
        />
      );
    case CHECKOUT_TO_PROFILE:
      return (
        <nav onClick={() => locationTransition()}>Return to Profile</nav>
      );
    case ORDER:
      return (
        <nav onClick={() => locationTransition()}>Return to Order</nav>
      );
    case CHECKOUT:
      return (
        <nav onClick={() => locationTransition()}>Proceed to Checkout</nav>
      );
    default:
      return (<h2>hello!</h2>);
  }
};
