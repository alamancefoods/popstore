import React, { useState } from 'react';
import store from '../../store/store'
import  POP_DICTIONARY, { TOTAL_POPS, BALANCE } from '../../constants/constants'
import { StripeProvider } from 'react-stripe-elements';
import StyledOrderForm from '../../styles/order/OrderStyles'
import { TestStyle } from '../../styles/profile/ProfileStyles'
import { ProtectedPaymentRoute, ProtectedProfileRoute } from '../utilities/ProtectedRoutes'
import { OrderInterface } from '../order/types';
import { ProfileInterface } from '../profile/types';
import QueryProvider from '../providers/QueryProvider'
import { Route, Switch } from 'react-router-dom';


const App: React.FC = () => {
  const [order, setOrder] = useState<OrderInterface>(store.popOrder)
  const [profile, setProfile] = useState<ProfileInterface>(store.customerProfile)
  const [isProfileComplete, setProfileCompletion] = useState(false)
  const [buttonList, setButtonList] = useState(store.buttonList)
  const [pickedPopList, setPickedPopList] = useState(store.pickedPopList)


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
    setButtonList([...buttonList]);
    setPickedPopList(pickedPopList => pickedPopList.concat([popFlavor]))
  }

  let removePopFromOrder = (popFlavor: string) => {
    updateOrder(0, popFlavor)
    let index = pickedPopList.indexOf(popFlavor)
    pickedPopList.splice(index, 1)
    setPickedPopList([...pickedPopList])
    setButtonList(buttonList => buttonList.concat([popFlavor]))
  }


  return (
    <StripeProvider apiKey='pk_test_G0og7jUXcWI9WxiK1YUfgZKe00w9QSGkKy'>
      <QueryProvider>
        <div>
          <Route
            exact
            path="/"
            render={props  =>
              <StyledOrderForm {...props}
                addPopToOrder={addPopToOrder}
                              updateOrder={updateOrder}
                              removePopFromOrder={removePopFromOrder}
                              convertPopCountToCharge={convertPopCountToCharge}
                              order={order}
                              pickedPopList={pickedPopList}
                              buttonList={buttonList}/>
            }
          />
          <ProtectedPaymentRoute
            order={order}
            profile={profile}
            isProfileComplete={isProfileComplete}
          />
          <Route
            exact
            path="/testpath"
            render={props =>
              <p>hello!</p>
            }
          />
        </div>
      </QueryProvider>
    </StripeProvider>
  );
}

export default App;

