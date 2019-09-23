import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NO_CHOICE, BUTTON_OBJECTS } from '../../constants/constants';
import { OrderFormProps } from './types';
import {
  StyledButtonContainer,
  StyledEntryContainer,
  StyledStatusContainer
} from '../../styles/order/OrderStyles';
import OrderButton from './OrderButton';
import OrderEntry from './OrderEntry';
import { NavLink } from 'react-router-dom';


const OrderForm = (className?: string) => {
  const choice = useSelector((state: any) => state.choiceReducer.choice);

  const ConditionalProfileLink = () => {
    let linkHolder = null;
    if (order.totalCount < 5) {
      linkHolder = null;
    } else {
      linkHolder = <NavLink to='/checkout/shipping-details'>Checkout</NavLink>;
    }
    return (
      linkHolder
    );
  };

  return (
    <>
      <StyledButtonContainer>
        {BUTTON_OBJECTS.map((popButton, index) =>
          <OrderButton
            popButton={popButton}
            index={index}
            key={index}
          />
        )}
      </StyledButtonContainer>
      <StyledEntryContainer>
        {pickedPop === NO_CHOICE
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
