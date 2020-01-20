import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { updateLocation } from '../../redux/location/actions';
import {
  CART_SVG, ORDER, PROFILE,
  CHECKOUT, ORDER_TO_PROFILE,
  LANDSCAPE_CHECKOUT_TO_PROFILE,
  PORTRAIT_CHECKOUT_TO_PROFILE
} from '../../constants/constants';
import { StyledCartIcon, StyledNav } from '../../styles/root/RootStyles';
import { LinkProps } from './styles';
import svgResizer from '../../utilities/svgResizer';

export const ConditionalLink = ({ location, route, className }: LinkProps) => {
  const display = useSelector((state: any) => state.displayReducer.display);
  const dispatch = useDispatch();
  const history = useHistory();
  const { iconWidth, iconHeight } = svgResizer(display, CART_SVG);
  const isProfileComplete = useSelector((state: any) => state.profileCompletionReducer.isComplete);


  function locationTransition(newLocation: string) {
    dispatch(updateLocation(newLocation));
    history.push(route);
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
    case LANDSCAPE_CHECKOUT_TO_PROFILE:
      return (
        <StyledNav className={className} onClick={() => locationTransition(PROFILE)}>Return to Profile</StyledNav>
      );
    case PORTRAIT_CHECKOUT_TO_PROFILE:
      return (
        <StyledNav className={className} onClick={() => locationTransition(PROFILE)}>Back</StyledNav>
      );
    case ORDER:
      return (
        <StyledNav className={className} onClick={() => locationTransition(ORDER)}>Return to Order</StyledNav>
      );
    case CHECKOUT:
      return (
        <StyledNav className={className} onClick={() => isProfileComplete ? locationTransition(CHECKOUT) : null}>Proceed to Checkout</StyledNav>
      );
    default:
      return (<h2>hello!</h2>);
  }
};
