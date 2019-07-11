import React, { useState } from 'react';
import store from '../../store/store'
import  POP_DICTIONARY, { TOTAL_POPS } from '../../constants/constants'
import { OrderInterface } from './types'
import OrderButton from './OrderButton'
import OrderEntry from './OrderEntry'

const Order: React.FC = () => {

  const [order, setOrder] = useState<OrderInterface>(store.popOrder)
  const [buttonList, setButtonList] = useState(store.buttonList)
  const [pickedPopList, setPickedPopList] = useState(store.pickedPopList)


  let updateOrder = (numericChange: number, popFlavor: string) => {
    //const changeDifference: number = numericChange - order[popFlavor]
    //setOrder(order[TOTAL_POPS] = ORDER[TOTAL_POPS] + changeDifference)
    //setOrder(order[popFlavor] = numericChange)
    const key: string = POP_DICTIONARY[popFlavor]
    const changeDifference: number = numericChange - order[key]
    const newTotal: number = order[TOTAL_POPS] + changeDifference
    setOrder(prevState => {
      return {...prevState, [key]: numericChange, [TOTAL_POPS]: newTotal}
    });
  }

  let incrementPop = (popFlavor: string) =>{
    //ORDER[TOTAL_POPS]++
    //ORDER[popFlavor]++
  }

  let decrementPop = (popFlavor: string) => {
    //ORDER[TOTAL_POPS]--
    //ORDER[popFlavor]--
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
    <button onClick={() => console.log(pickedPopList) }>popList</button>
    <button onClick={() => console.log(buttonList) }>buttonList</button>
    <button onClick={() => console.log(order) }>store</button>
    {order.totalCount} Pops in All!
    </div>
  );
};


export default Order;
