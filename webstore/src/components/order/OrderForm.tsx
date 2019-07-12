import React, { useState } from 'react';
import store from '../../store/store'
import  POP_DICTIONARY, { TOTAL_POPS, MINIMUM_ORDER_SIZE } from '../../constants/constants'
import { OrderInterface } from './types'
import OrderButton from './OrderButton'
import OrderEntry from './OrderEntry'

const OrderForm = ({toggleCheckout} : {toggleCheckout: () => void}) => {

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

  const ToggleToCheckout = () => {
    let checkoutGate = null
    if(order.totalCount < 5){
      checkoutGate = <p>5 Pop Minimum Required for Purchase</p>;
    } else {
      checkoutGate = <button onClick={() => toggleCheckout()}>Checkout</button>
    }
    return(
      checkoutGate
    )
  }

  const OrderMessage: React.FC = () => {
    let message: string
    switch(order.totalCount){
      case 0:
        message = 'Select your favorite popsicle flavor!'
        break;
      case 1:
        message = "You've selected one, the journey's begun!"
        break;
      default:
        message = `You've selected ${order.totalCount} pops!`
    }

    return(
      <p>{message}</p>
    )
  }


  return(
    <div>
      {buttonList.map((button) =>
        <OrderButton
          addPopToOrder={addPopToOrder}
          popFlavor={button}
        />
      )}
      {pickedPopList.map((pickedPop) =>
        <OrderEntry
          popFlavor={pickedPop} updateOrder={updateOrder} removePopFromOrder={removePopFromOrder} popCount={order[POP_DICTIONARY[pickedPop]]}
        />
      )}
      <OrderMessage />
      <p>
        Balance: ${convertPopCountToCharge(order[TOTAL_POPS], false)}
      </p>
      <ToggleToCheckout />
    </div>
  );
};


export default OrderForm;
