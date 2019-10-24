import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import store from '../../store/store';
import { StripeProvider, Elements } from 'react-stripe-elements';
import { ProfileInterface } from '../profile/types';
import QueryProvider from '../providers/QueryProvider';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ORDER_TO_PROFILE, PROFILE_ROUTE } from '../../constants/constants';
import ProfileForm from '../profile/ProfileForm';
import StyledPaymentForm, { StyledPaymentContainer } from '../../styles/payment/PaymentStyles';
import { StyledHeader, StyledUserAlertContainer, StyledInfoBox } from '../../styles/root/RootStyles';
import Balance from './Balance';
import OrderForm from '../order/OrderForm';
import PaymentForm from '../payment/PaymentForm';
import ResizedLogo from './LogoContainer';
import { ConditionalLink } from '../main/Navigation';
import UserAlert from './UserAlert';

const App: React.FC = () => {
  const [profile, setProfile] = useState<ProfileInterface>(store.customerProfile);
  const isProfileComplete = useSelector((state: any) => state.profileCompletionReducer.isComplete);
  const order = useSelector((state: any) => state.orderReducer.order);
  const choice = useSelector((state: any) => state.choiceReducer.choice);


  return (
    <QueryProvider>
      <StyledHeader>
        <ResizedLogo />
        {order.totalCount > 0 ?
          <StyledInfoBox>
            {order.totalCount > 5 ?
              <ConditionalLink location={ORDER_TO_PROFILE} route={PROFILE_ROUTE} /> :
              null
            }
            <Balance />
          </StyledInfoBox> :
          null
        }
      </StyledHeader>
      <Switch>
        <Route
          exact
          path="/"
          render={() => <OrderForm />}
        />
        <Route
          path="/checkout/shipping-details"
          render={() =>
            (order.totalCount >= 5)
              ?
              <ProfileForm />
              :
              <Redirect to="/" />
          }
        />
        <Route
          path="/complete-purchase"
          render={props =>
            isProfileComplete
              ?
              <StripeProvider apiKey='pk_test_G0og7jUXcWI9WxiK1YUfgZKe00w9QSGkKy'>
                <Elements>
                  <PaymentForm />
                </Elements>
              </StripeProvider>
              :
              <Redirect to="/checkout/shipping-details" />
          }
        />
        <Redirect to="/" />
      </Switch>
      <StyledUserAlertContainer>
        <UserAlert />
      </StyledUserAlertContainer>
    </QueryProvider>
  );
};

export default App;

