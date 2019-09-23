import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { StripeProvider, Elements } from 'react-stripe-elements';
import { ProtectedPaymentRoute, ProtectedProfileRoute } from '../utilities/ProtectedRoutes';
import { ProfileInterface } from '../profile/types';
import QueryProvider from '../providers/QueryProvider';
import { Route, Switch, Redirect } from 'react-router-dom';
import StyledProfileForm, { StyledProfileContainer } from '../../styles/profile/ProfileStyles';
import StyledPaymentForm, { StyledPaymentContainer } from '../../styles/payment/PaymentStyles';
import { StyledBalance, StyledHeader, StyledUserAlertContainer } from '../../styles/root/RootStyles';
import OrderForm from '../order/OrderForm';
import ResizedLogo from './LogoContainer';
import UserAlert from './UserAlert';

const App: React.FC = () => {
  const [profile, setProfile] = useState<ProfileInterface>(store.customerProfile);
  const [isProfileComplete, setProfileCompletion] = useState(false);
  const [isInitiated, setInitiation] = useState(false);
  const order = useSelector((state: any) => state.orderReducer.order);


  return (
    <QueryProvider>
      <StyledHeader>
        <ResizedLogo />
        <StyledBalance
          convertPopCountToCharge={convertPopCountToCharge}
          order={order}
        />
      </StyledHeader>
      <Switch>
        <Route
          exact
          path="/"
          render={props =>
            <OrderForm{...props}
              addPopToOrder={addPopToOrder}
              updateOrder={updateOrder}
              removePopFromOrder={removePopFromOrder}
              order={order}
              pickedPop={pickedPop}
              buttonList={buttonList}
            />
          }
        />
        <Route
          path="/checkout/shipping-details"
          render={props =>
            (order.totalCount >= 5)
              ?
              <StyledProfileForm {...props}
                setProfile={setProfile}
                setProfileCompletion={setProfileCompletion}
                isProfileComplete={isProfileComplete}
                profile={profile}
              />
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
        <UserAlert
          isInitiated={isInitiated}
        />
      </StyledUserAlertContainer>
    </QueryProvider>
  );
};

export default App;

