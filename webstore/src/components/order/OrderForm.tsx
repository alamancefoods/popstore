import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { BUTTON_OBJECTS } from '../../constants/constants';
import { NO_CHOICE } from '../../constants/constants';
import {
  StyledButtonContainer,
  StyledStatusContainer
} from '../../styles/order/OrderStyles';
import OrderButton from './OrderButton';
import OrderEntry from './OrderEntry';
import { NavLink } from 'react-router-dom';


const OrderForm = ({ className }: { className?: string }) => {
  const choice = useSelector((state: any) => state.choiceReducer.choice);

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
      {choice === NO_CHOICE
        ? null
        : <OrderEntry />
      }
    </>
  );
};


export default OrderForm;
