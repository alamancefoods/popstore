import React from 'react';
import { TOTAL_POPS } from '../../constants/constants'
import { Route, Redirect } from 'react-router-dom'
import StyledCheckoutForm, { StyledCheckoutContainer } from '../../styles/checkout/CheckoutStyles'
import { ProtectedCheckoutRouteProps } from './types'
import { Elements } from 'react-stripe-elements';

export const ProtectedCheckoutRoute = (
  {
    toggleCheckout,
    order,
    completePurchase
  }: ProtectedCheckoutRouteProps ) => {


    return(
      <Route
        exact
        path="/checkout"
        render={props =>
          (order.totalCount > 5 )
          ?
          <StyledCheckoutContainer>
            <Elements>
              <StyledCheckoutForm {...props}
                toggleCheckout={toggleCheckout}
                               order={order}
                               completePurchase={completePurchase}
              />
            </Elements>
          </StyledCheckoutContainer>
          :
          <Redirect to="/" />
        }
      />
    )
  }



