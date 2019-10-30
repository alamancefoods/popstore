import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { updateLocation } from '../../redux/location/actions';
import {
  CART_SVG, ORDER, PROFILE,
  CHECKOUT, ORDER_TO_PROFILE,
  CHECKOUT_TO_PROFILE
} from '../../constants/constants';
import { StyledCartIcon } from '../../styles/root/RootStyles';
import { LinkProps } from './styles';
import svgResizer from '../../utilities/svgResizer';

export const ConditionalLink = ({ location, route }: LinkProps) => {
  const display = useSelector((state: any) => state.displayReducer.display);
  const dispatch = useDispatch();
  const history = useHistory();
  const { iconWidth, iconHeight } = svgResizer(display, CART_SVG);

  function locationTransition(newLocation: string) {
    dispatch(updateLocation(newLocation));
    setTimeout(() => history.push(route), 1000);
    console.log(location);
  };

  switch (location) {
    case ORDER_TO_PROFILE:
      return (
        <StyledCartIcon
          width={iconWidth}
          height={iconHeight}
          onClick={() => locationTransition(PROFILE)}
        />
      );
    case CHECKOUT_TO_PROFILE:
      return (
        <nav onClick={() => locationTransition(PROFILE)}>Return to Profile</nav>
      );
    case ORDER:
      return (
        <nav onClick={() => locationTransition(ORDER)}>Return to Order</nav>
      );
    case CHECKOUT:
      return (
        <nav onClick={() => locationTransition(CHECKOUT)}>Proceed to Checkout</nav>
      );
    default:
      return (<h2>hello!</h2>);
  }
};
