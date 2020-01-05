import React from 'react';
import { useTransition, animated } from 'react-spring';
import { useSelector } from 'react-redux';
import { StripeProvider, Elements } from 'react-stripe-elements';
import QueryProvider from '../providers/QueryProvider';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';
import {
  PROFILE_ROUTE, ORDER_ROUTE, CHECKOUT_ROUTE,
  STRIPE_API_KEY
} from '../../constants/constants';
import ProfileForm from '../profile/ProfileForm';
import { StyledUserAlertContainer, StyledInfoBox } from '../../styles/root/RootStyles';
import OrderForm from '../order/OrderForm';
import PaymentForm from '../payment/PaymentForm';
import Header from './HeaderContainer';
import UserAlert from './UserAlert';

const App: React.FC = () => {
  const isProfileComplete = useSelector((state: any) => state.profileCompletionReducer.isComplete);
  const order = useSelector((state: any) => state.orderReducer.order);
  const siteLocation = useSelector((state: any) => state.locationReducer.location);
  const display = useSelector((state: any) => state.displayReducer.display);


  return (
    <QueryProvider>
      <Header />
      <Switch>
        <Route
          exact
          path={ORDER_ROUTE}
          render={() => <OrderForm />}
        />
        <Route
          path={PROFILE_ROUTE}
          render={() =>
            (order.totalCount >= 5)
              ?
              <ProfileForm />
              :
              <Redirect to={ORDER_ROUTE} />
          }
        />
        <Route
          path={CHECKOUT_ROUTE}
          render={props =>
            isProfileComplete
              ?
              <StripeProvider apiKey={STRIPE_API_KEY}>
                <Elements>
                  <PaymentForm />
                </Elements>
              </StripeProvider>
              :
              <Redirect to={PROFILE_ROUTE} />
          }
        />
        <Redirect to={ORDER_ROUTE} />
      </Switch>
      <StyledUserAlertContainer>
        <UserAlert />
      </StyledUserAlertContainer>
    </QueryProvider>
  );
};

export default App;

