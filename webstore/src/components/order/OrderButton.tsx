import React from 'react';
import { config, animated, useSpring } from 'react-spring';
import { useSelector, useDispatch } from 'react-redux';
import { updateChoice } from '../../redux/order/actions';
import { NO_CHOICE, BUTTON_SVG, ORDER } from '../../constants/constants';
import { PopButtonProps } from './types';
import {
  StyledFlavorIcon,
  StyledFlavorCountBox,
  StyledCountText,
  StyledBackgroundCircle
} from '../../styles/order/OrderStyles';
import svgResizer from '../../utilities/svgResizer';

const OrderButton = ({ popButton }: PopButtonProps) => {
  const display = useSelector((state: any) => state.displayReducer.display);
  const choice = useSelector((state: any) => state.choiceReducer.choice);
  const order = useSelector((state: any) => state.orderReducer.order);
  const dispatch = useDispatch();
  const siteLocation = useSelector((state: any) => state.locationReducer.location);

  let mass = 0.70;
  let tension = 490;
  let friction = 25;
  let velocity = 30;
  // My hacky way of changing configs during transitions.
  if (siteLocation !== ORDER) {
    mass = 0.5;
    tension = 800;
    friction = 30;
    velocity = 20;
  };


  const opacityProps = useSpring({
    config: config.default,
    opacity: siteLocation === ORDER ? 1 : 0,
    from: { opacity: 0 }
  });

  const FlavorIcon = animated(popButton.svg);
  const { iconWidth, iconHeight } = svgResizer(display, BUTTON_SVG);
  const countFontSize = display.isPortrait ? display.windowHeight * 0.02 : display.windowHeight * 0.03;
  const offsetX = iconHeight * 0.5;
  const offsetY = iconWidth * 0.2;
  const theme = {
    offsetX: offsetX,
    offsetY: offsetY,
    countFontSize: countFontSize,
    gridArea: popButton.popFlavor
  };

  if (choice === popButton.popFlavor) {
    return null;
  } else {
    return (
      <>
        <StyledFlavorIcon
          theme={theme}
          component={
            <FlavorIcon
              width={iconWidth}
              height={iconHeight}
              style={opacityProps}
              onClick={
                () => choice === NO_CHOICE ? dispatch(updateChoice(popButton.popFlavor)) : ''
              }
            />
          }
        />
        {order[popButton.popFlavor] > 0
          ?
          <>
            <StyledBackgroundCircle theme={theme} />
            <StyledFlavorCountBox theme={theme}>
              <StyledCountText>{order[popButton.popFlavor]}</StyledCountText>
            </StyledFlavorCountBox>
          </>
          : null}
      </>
    );
  }
};

export default OrderButton;
