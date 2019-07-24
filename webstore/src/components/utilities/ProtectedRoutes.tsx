import React from 'react';
import { TOTAL_POPS } from '../../constants/constants'
import { Route, Redirect } from 'react-router-dom'
import StyledPaymentForm, { StyledPaymentContainer } from '../../styles/payment/PaymentStyles'
import StyledProfileForm from '../../styles/profile/ProfileStyles'
import { ProtectedPaymentRouteProps, ProtectedProfileRouteProps } from './types'
import { Elements } from 'react-stripe-elements';




export const ProtectedProfileRoute = (
  {
    order,
    setProfile,
    setProfileCompletion,
    isProfileComplete
  } : ProtectedProfileRouteProps ) => {
    return(
      <Route
        path="/checkout/shipping-details"
        render={props =>
          (order.totalCount >= 5)
          ?
          <StyledProfileForm
            setProfile={setProfile}
            setProfileCompletion={setProfileCompletion}
            isProfileComplete={isProfileComplete}
          />
            :
          <Redirect to="/" />
        }
      />
    )
  }


export const ProtectedPaymentRoute = (
  {
    order,
    profile,
    isProfileComplete
  } : ProtectedPaymentRouteProps ) => {
    return(
      <Route
        path="/complete-purchase"
        render={props =>
          isProfileComplete
          ?
          <Elements>
            <StyledPaymentForm
              order={order}
                    profile={profile}
            />
          </Elements>
          :
          <Redirect to="/checkout/shipping-details" />
        }
      />
    )
  }



