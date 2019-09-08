import React, { useState } from 'react';
import store from '../../store/store'
import  POP_DICTIONARY, { TOTAL_POPS, BALANCE, NO_POP_PICKED} from '../../constants/constants'
import { StripeProvider, Elements } from 'react-stripe-elements';
import { TestStyle } from '../../styles/profile/ProfileStyles'
import { ProtectedPaymentRoute, ProtectedProfileRoute } from '../utilities/ProtectedRoutes'
import { OrderInterface } from '../order/types';
import { ProfileInterface } from '../profile/types';
import QueryProvider from '../providers/QueryProvider'
import { Route, Switch, Redirect } from 'react-router-dom';
import StyledProfileForm, { StyledProfileContainer } from '../../styles/profile/ProfileStyles'
import StyledPaymentForm, { StyledPaymentContainer } from '../../styles/payment/PaymentStyles'
import { StyledBalance, StyledHeader, StyledUserAlertContainer } from '../../styles/root/RootStyles'
import OrderForm from '../order/OrderForm';
import ResizedLogo from './LogoContainer'
import UserAlert from './UserAlert';

const App: React.FC = () => {
  const [order, setOrder] = useState<OrderInterface>(store.popOrder)
  const [profile, setProfile] = useState<ProfileInterface>(store.customerProfile)
  const [isProfileComplete, setProfileCompletion] = useState(false)
  const [buttonList, setButtonList] = useState(store.buttonList)
  const [pickedPop, setPickedPop] = useState(store.pickedPop)
  const [isInitiated, setInitiation] = useState(false)


  let convertPopCountToCharge = (popCount: number, isCents: boolean) => {
    let totalCharge: number
    if(popCount < 50){
      totalCharge = popCount * 25
    }else{
      totalCharge = popCount * 10
    }
    let dollarsCharge = totalCharge / 100
    return Number(dollarsCharge).toFixed(2)
  }

  let updateOrder = (numericChange: number, popFlavor: string) => {
    const key: string = POP_DICTIONARY[popFlavor]
    const changeDifference: number = numericChange - order[key]
    const newTotal: number = order[TOTAL_POPS] + changeDifference
    let newBalance: number
    if(newTotal > 10){
      newBalance = newTotal * 25
    }else{
      newBalance = newTotal * 10
    }
    setOrder(prevState => {
      return {...prevState, [key]: numericChange, [TOTAL_POPS]: newTotal, [BALANCE]: newBalance}
    });
  }

  let addPopToOrder =  (popFlavor: string) => {
    let index: number = buttonList.indexOf(popFlavor)
    buttonList.splice(index, 1)
    if(isInitiated === false){
      setInitiation(true)
    }
    setPickedPop(popFlavor)
  }

  let removePopFromOrder = (popFlavor: string) => {
    updateOrder(0, popFlavor)
    setPickedPop(NO_POP_PICKED)
    setButtonList(buttonList => buttonList.concat([popFlavor]))
  }


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
            render={props  =>
              <OrderForm{...props}
                addPopToOrder={addPopToOrder}
                updateOrder={updateOrder}
                removePopFromOrder={removePopFromOrder}
                convertPopCountToCharge={convertPopCountToCharge}
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
}

export default App;

