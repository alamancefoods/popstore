import React from 'react';
import { useSelector } from 'react-redux';
import { updateLocation } from '../../redux/location/actions';
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
  const siteLocation = useSelector((state: any) => state.locationReducer.location);
  const display = useSelector((state: any) => state.displayReducer.display);


  return (
    <StyledHeader>
      <ResizedLogo />
      {siteLocation === ORDER && order.totalCount > 0 ?
        <StyledInfoBox>
          {order.totalCount > 5 ?
            <ConditionalLink location={ORDER_TO_PROFILE} route={PROFILE_ROUTE} /> :
            null
          }
          <Balance />
        </StyledInfoBox>
        : siteLocation === PROFILE && display.isPortrait !== true ?
          <StyledInfoBox>
            <ConditionalLink
              location={ORDER}
              route={ORDER_ROUTE} />
            <ConditionalLink
              location={CHECKOUT}
              route={CHECKOUT_ROUTE}
            />
          </StyledInfoBox>
          : siteLocation === CHECKOUT && !display.isPortrait ?
            <StyledInfoBox>
              <ConditionalLink
                location={ORDER}
                route={ORDER_ROUTE} />
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
