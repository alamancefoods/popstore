import React from 'react';
import { CSSProperties } from 'react';
import { useSelector } from 'react-redux';
import { useSprings, config } from 'react-spring';
import { useOrderSprings } from '../../springs/orderSpring';
import { BUTTON_OBJECTS } from '../../constants/constants';
import { NO_CHOICE, ORDER } from '../../constants/constants';
import {
  StyledButtonContainer,
  ScalingDiv
} from '../../styles/order/OrderStyles';
import OrderButton from './OrderButton';
import OrderEntry from './OrderEntry';
import { Prompt } from './Prompt';


const OrderForm = ({ className }: { className?: string }) => {
  const choice = useSelector((state: any) => state.choiceReducer.choice);
  const siteLocation = useSelector((state: any) => state.locationReducer.location);

  interface CustomSpringProps extends CSSProperties {
    mod?: number;
  };

  const mySprings = useSprings<{}, CustomSpringProps>(
    BUTTON_OBJECTS.length,
    BUTTON_OBJECTS.map(button =>
      ({
        config: config.wobbly,
        mod: siteLocation === ORDER ? 1 : 0,
        from: { mod: 0 }
      })
    ));





  return (
    <>
      <StyledButtonContainer>
        {mySprings.map(({ mod, ...rest }, index) => (
          <OrderButton
            key={BUTTON_OBJECTS[index].popFlavor}
            popButton={BUTTON_OBJECTS[index]}
            // @ts-ignore
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


//        {BUTTON_OBJECTS.map((popButton, index) =>
//         <OrderButton
//            popButton={popButton}
//            key={index}
//          />
//        )}
