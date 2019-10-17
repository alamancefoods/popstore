import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { interpolate, useTrail } from 'react-spring';
import { BUTTON_OBJECTS } from '../../constants/constants';
import { NO_CHOICE, ORDER } from '../../constants/constants';
import {
  StyledButtonContainer,
  StyledStatusContainer,
  ScalingDiv
} from '../../styles/order/OrderStyles';
import OrderButton from './OrderButton';
import OrderEntry from './OrderEntry';
import { NavLink } from 'react-router-dom';


const OrderForm = ({ className }: { className?: string }) => {
  const choice = useSelector((state: any) => state.choiceReducer.choice);
  const siteLocation = useSelector((state: any) => state.locationReducer.location);

  let mass = 0.70;
  let tension = 490;
  let friction = 25;
  let velocity = 30;
  // My hacky way of changing configs during transitions.
  if (siteLocation != ORDER) {
    mass = 0.5;
    tension = 800;
    friction = 30;
    velocity = 20;
  };

  const config = { mass: mass, tension: tension, friction: friction, velocity: velocity };
  const trail = useTrail(BUTTON_OBJECTS.length, {
    config,
    s: siteLocation === ORDER ? 1 : 0,
    from: { s: 0 },
  });



  return (
    <>
      <StyledButtonContainer>
        {trail.map(({ s, ...rest }, index) => (
          // @ts-ignore
          <ScalingDiv s={s} theme={{ gridArea: BUTTON_OBJECTS[index].popFlavor }}>
            <OrderButton
              key={BUTTON_OBJECTS[index].popFlavor}
              popButton={BUTTON_OBJECTS[index]}
            />
          </ScalingDiv>
        ))}
      </StyledButtonContainer>
      {choice === NO_CHOICE
        ? null
        : <OrderEntry />
      }
    </>
  );
};


export default OrderForm;


//        {BUTTON_OBJECTS.map((popButton, index) =>
//         <OrderButton
//            popButton={popButton}
//            key={index}
//          />
//        )}
