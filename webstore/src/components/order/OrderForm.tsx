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
      linkHolder = null
    } else {
      linkHolder = <NavLink to='/checkout/shipping-details'>Checkout</NavLink>
    }
    return(
      linkHolder
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
        ? null
        : <OrderEntry
           popFlavor={pickedPop}
           updateOrder={updateOrder}
           removePopFromOrder={removePopFromOrder}
           popCount={order[POP_DICTIONARY[pickedPop]]}
           order={order}
         />
        }
        <ConditionalProfileLink />
      </StyledEntryContainer>
    </>
  );
};


export default OrderForm;
