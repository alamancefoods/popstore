import React from 'react';
import { CSSProperties } from 'react';
import { useSelector } from 'react-redux';
import { useSprings, config } from 'react-spring';
import { useOrderSprings } from '../../springs/orderSprings';
import { BUTTON_OBJECTS } from '../../constants/constants';
import { NO_CHOICE, ORDER } from '../../constants/constants';
import {
  StyledButtonContainer,
  ScalingDiv
} from '../../styles/order/OrderStyles';
import OrderButton from './OrderButton';
import OrderEntry from './OrderEntry';
import { Prompt } from './Prompt';
import { useLocation } from 'react-router-dom';


const OrderForm = ({ className }: { className?: string }) => {
  const choice = useSelector((state: any) => state.choiceReducer.choice);
  const siteLocation = useLocation();
  const orderSprings = useOrderSprings(siteLocation.pathname);

  return (
    <>
      <StyledButtonContainer>
        {orderSprings.map(({ mod, ...rest }, index) => (
          <OrderButton
            key={BUTTON_OBJECTS[index].popFlavor}
            popButton={BUTTON_OBJECTS[index]}
            mod={mod}
          />
        ))}
      </StyledButtonContainer>
      {choice === NO_CHOICE
        ? <Prompt />
        : <OrderEntry />
      }
    </>
  );
};


export default OrderForm;
