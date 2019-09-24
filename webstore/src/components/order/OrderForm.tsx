import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { BUTTON_OBJECTS } from '../../constants/constants';
import { NO_CHOICE } from '../../constants/constants';
import {
  StyledButtonContainer,
  StyledEntryContainer,
  StyledStatusContainer
} from '../../styles/order/OrderStyles';
import OrderButton from './OrderButton';
import OrderEntry from './OrderEntry';
import { NavLink } from 'react-router-dom';


const OrderForm = ({ className }: { className?: string }) => {
  const choice = useSelector((state: any) => state.choiceReducer.choice);
  const order = useSelector((state: any) => state.orderReducer.order);

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
            key={index}
          />
        )}
      </StyledButtonContainer>
      <StyledEntryContainer>
        {choice === NO_CHOICE
          ? null
          : <OrderEntry />
        }
        <ConditionalProfileLink />
      </StyledEntryContainer>
    </>
  );
};


export default OrderForm;
