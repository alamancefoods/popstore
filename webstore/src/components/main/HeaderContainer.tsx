import React, { useState, useEffect } from 'react';
import { useSelector, useStore } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  ORDER_TO_PROFILE,
  LANDSCAPE_CHECKOUT_TO_PROFILE,
  ORDER, PROFILE, CHECKOUT,
  PROFILE_ROUTE, ORDER_ROUTE, CHECKOUT_ROUTE
} from '../../constants/constants';
import { ConditionalLink } from '../main/Navigation';
import { StyledHeader, StyledInfoBox } from '../../styles/root/RootStyles';
import ResizedLogo from './LogoContainer';
import Balance from './Balance';


const HeaderContainer = () => {
  const order = useSelector((state: any) => state.orderReducer.order);
  const display = useSelector((state: any) => state.displayReducer.display);
  const history = useHistory();
  const path = history.location.pathname;

  const theme = {
    isOrder: true,
    isPortrait: display.isPortrait,
    windowHeight: display.windowHeight,
    windowWidth: display.windowWidth
  };


  return (
    <StyledHeader>
      <ResizedLogo />
      {path === ORDER_ROUTE ?
        <StyledInfoBox theme={theme}>
          <Balance />
        </StyledInfoBox>
        : path === PROFILE_ROUTE ?
          <StyledInfoBox>
            <ConditionalLink
              location={ORDER}
              route={ORDER_ROUTE} />
          </StyledInfoBox>
          : path === CHECKOUT_ROUTE ?
            <StyledInfoBox>
              <ConditionalLink
                location={LANDSCAPE_CHECKOUT_TO_PROFILE}
                route={PROFILE_ROUTE} />
            </StyledInfoBox>
            : null
      }
    </StyledHeader>
  );
};

export default HeaderContainer;
