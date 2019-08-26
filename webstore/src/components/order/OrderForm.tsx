import React from 'react';
import  POP_DICTIONARY, { TOTAL_POPS, NO_POP_PICKED } from '../../constants/constants';
import { OrderFormProps } from './types';
import {
  StyledButtonContainer,
  StyledEntryContainer,
  StyledStatusContainer
} from '../../styles/order/OrderStyles';
import OrderButton from './OrderButton';
import OrderEntry from './OrderEntry';
import { NavLink } from 'react-router-dom';

const OrderForm = (
  {
    addPopToOrder,
    updateOrder,
    removePopFromOrder,
    convertPopCountToCharge,
    order,
    pickedPop,
    buttonList,
    className
  }: OrderFormProps) => {

  const ConditionalProfileLink = () => {
    let linkHolder = null
    if(order.totalCount < 5){
      linkHolder = <p>5 Pop Minimum Required for Purchase</p>;
    } else {
      linkHolder = <NavLink to='/checkout/shipping-details'>Checkout</NavLink>
    }
    return(
      linkHolder
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
    <>
      <StyledButtonContainer>
        {buttonList.map((button, index) =>
          <OrderButton
            addPopToOrder={addPopToOrder}
            pickedPop={pickedPop}
            popFlavor={button}
            index={index}
            key={index}
          />
        )}
      </StyledButtonContainer>
      <StyledEntryContainer>
        {pickedPop === NO_POP_PICKED
        ? <p>No Pop Picked</p>
        : <OrderEntry
           popFlavor={pickedPop}
           updateOrder={updateOrder}
           removePopFromOrder={removePopFromOrder}
           popCount={order[POP_DICTIONARY[pickedPop]]}
           order={order}
         />
        }
        <OrderMessage />
        <p>
          Balance: ${convertPopCountToCharge(order[TOTAL_POPS], false)}
        </p>
        <ConditionalProfileLink />
      </StyledEntryContainer>
    </>
  );
};


export default OrderForm;
