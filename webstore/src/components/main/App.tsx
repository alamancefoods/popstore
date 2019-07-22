import React, { useState } from 'react';
import store from '../../store/store'
import  POP_DICTIONARY, { TOTAL_POPS, BALANCE } from '../../constants/constants'
import { Elements, StripeProvider } from 'react-stripe-elements';
import  CheckoutForm  from '../checkout/CheckoutForm'
import StyledOrderForm from '../../styles/order/OrderStyles'
import StyledCheckoutForm, { StyledCheckoutContainer } from '../../styles/checkout/CheckoutStyles'
import { OrderInterface } from '../order/types'
import QueryProvider from '../providers/QueryProvider'


const App: React.FC = () => {
  const [isAtCheckout, setCheckout] = useState(false)
  const [order, setOrder] = useState<OrderInterface>(store.popOrder)
  const [buttonList, setButtonList] = useState(store.buttonList)
  const [pickedPopList, setPickedPopList] = useState(store.pickedPopList)
  const [isPurchaseComplete, setPurchaseComplete] = useState(false)


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



  const toggleCheckout: () => void = () => {
    setCheckout(isAtCheckout => !isAtCheckout)
  }

  const completePurchase: () => void = () => {
    setPurchaseComplete(isPurchaseComplete => !isPurchaseComplete)
  }

  const Root = () => {
    switch(isPurchaseComplete){
      case false:
        switch(isAtCheckout){
          case true:
            return(
              <StyledCheckoutContainer>
                <Elements>
                  <StyledCheckoutForm
                    toggleCheckout={toggleCheckout}
                    order={order}
                    completePurchase={completePurchase}
                  />
                </Elements>
              </StyledCheckoutContainer>
            )
          default:
            return(
              <StyledOrderForm
                toggleCheckout={toggleCheckout}
                addPopToOrder={addPopToOrder}
                updateOrder={updateOrder}
                removePopFromOrder={removePopFromOrder}
                convertPopCountToCharge={convertPopCountToCharge}
                order={order}
                pickedPopList={pickedPopList}
                buttonList={buttonList}/>
            )
        }
      default:
        return( <p>Thank you for your purchase!</p>)
    }
  }


  return (
    <StripeProvider apiKey='pk_test_G0og7jUXcWI9WxiK1YUfgZKe00w9QSGkKy'>
      <QueryProvider>
        <Root />
      </QueryProvider>
    </StripeProvider>
  );
}

export default App;

