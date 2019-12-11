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
  StyledBackgroundCircle,
  StyledSingleButtonContainer
} from '../../styles/order/OrderStyles';
import svgResizer from '../../utilities/svgResizer';

const OrderButton = ({ popButton, opacity }: PopButtonProps) => {
  const display = useSelector((state: any) => state.displayReducer.display);
  const choice = useSelector((state: any) => state.choiceReducer.choice);
  const order = useSelector((state: any) => state.orderReducer.order);
  const dispatch = useDispatch();
  const siteLocation = useSelector((state: any) => state.locationReducer.location);




  const FlavorIcon = animated(popButton.svg);
  const { iconWidth, iconHeight } = svgResizer(display, BUTTON_SVG);
  const countFontSize = display.isPortrait ? display.windowHeight * 0.02 : display.windowHeight * 0.03;
  const offsetX = iconHeight * 0.01;
  const offsetY = iconWidth * 0.01;
  const theme = {
    countFontSize: countFontSize,
    gridArea: popButton.popFlavor
  };

  if (choice === popButton.popFlavor) {
    return null;
  } else {
    return (
      <StyledSingleButtonContainer
        theme={theme}
        style={{ opacity: opacity }}
      >
        <StyledFlavorIcon
          component={
            <FlavorIcon
              width={iconWidth}
              height={iconHeight}
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
      </StyledSingleButtonContainer>
    );
  }
};

export default OrderButton;
