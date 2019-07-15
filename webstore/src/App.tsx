import React, { useState } from 'react';
import store from './store/store'
import  POP_DICTIONARY, { TOTAL_POPS, MINIMUM_ORDER_SIZE } from './constants/constants'
import { Elements, StripeProvider } from 'react-stripe-elements';
import  CheckoutForm  from './components/checkout/CheckoutForm'
import OrderForm from './components/order/OrderForm'
import { OrderInterface } from './components/order/types'


const App: React.FC = () => {
  const [isAtCheckout, setCheckout] = useState(false)
  const [order, setOrder] = useState<OrderInterface>(store.popOrder)
  const [buttonList, setButtonList] = useState(store.buttonList)
  const [pickedPopList, setPickedPopList] = useState(store.pickedPopList)


  let convertPopCountToCharge = (popCount: number, isCents: boolean) => {
    let totalCharge: number
    if(popCount < 50){
      totalCharge = popCount * 25
    }else{
      totalCharge = popCount * 10
    }
    if(isCents){
      return totalCharge
    }else{
      let centsCharge = totalCharge / 100
      return Number(centsCharge).toFixed(2)
    }
  }

  let updateOrder = (numericChange: number, popFlavor: string) => {
    const key: string = POP_DICTIONARY[popFlavor]
    const changeDifference: number = numericChange - order[key]
    const newTotal: number = order[TOTAL_POPS] + changeDifference
    setOrder(prevState => {
      return {...prevState, [key]: numericChange, [TOTAL_POPS]: newTotal}
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

  const Root = () => {
    if(isAtCheckout){
      return(
        <Elements>
          <CheckoutForm
            toggleCheckout={toggleCheckout}
            order={order}
          />
        </Elements>
      )
    }else{
      return(
        <OrderForm
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
  }


  return (
    <StripeProvider apiKey='pk_test_G0og7jUXcWI9WxiK1YUfgZKe00w9QSGkKy'>
      <Root />
    </StripeProvider>
  );
}

export default App;

