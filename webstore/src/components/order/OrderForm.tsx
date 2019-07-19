import React from 'react';
import  POP_DICTIONARY, { TOTAL_POPS } from '../../constants/constants'
import { OrderFormProps } from './types'
import { StyledButtonContainer, StyledEntryContainer} from '../../styles/order/OrderStyles'
import OrderButton from './OrderButton'
import OrderEntry from './OrderEntry'

const OrderForm = (
  {
    toggleCheckout,
    addPopToOrder,
    updateOrder,
    removePopFromOrder,
    convertPopCountToCharge,
    order,
    pickedPopList,
    buttonList,
    className
  }: OrderFormProps) => {

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
    <div className={className}>
      <StyledButtonContainer>
        {buttonList.map((button, index) =>
          <OrderButton
            addPopToOrder={addPopToOrder}
            popFlavor={button}
            index={index}
          />
        )}
      </StyledButtonContainer>
      {pickedPopList.map((pickedPop) =>
        <OrderEntry
          popFlavor={pickedPop}
          updateOrder={updateOrder}
          removePopFromOrder={removePopFromOrder}
          popCount={order[POP_DICTIONARY[pickedPop]]}
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
