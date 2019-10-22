import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import store from '../../store/store';
import { StripeProvider, Elements } from 'react-stripe-elements';
import { ProfileInterface } from '../profile/types';
import QueryProvider from '../providers/QueryProvider';
import { Route, Switch, Redirect } from 'react-router-dom';
import ProfileForm from '../profile/ProfileForm';
import StyledProfileForm, { StyledProfileContainer } from '../../styles/profile/ProfileStyles';
import StyledPaymentForm, { StyledPaymentContainer } from '../../styles/payment/PaymentStyles';
import { StyledHeader, StyledUserAlertContainer, StyledInfoBox } from '../../styles/root/RootStyles';
import Balance from './Balance';
import OrderForm from '../order/OrderForm';
import ResizedLogo from './LogoContainer';
import { ConditionalProfileLink } from '../main/Navigation';
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
              <ConditionalProfileLink /> :
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
                <StyledPaymentContainer>
                  <Elements>
                    <StyledPaymentForm {...props}
                      order={order}
                      profile={profile}
                    />
                  </Elements>
                </StyledPaymentContainer>
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

