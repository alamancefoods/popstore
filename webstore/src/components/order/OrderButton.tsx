import React, { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateChoice } from '../../redux/order/actions';
import { NO_CHOICE, BUTTON_SVG } from '../../constants/constants';
import {
  AnimatedFlavorIcon,
  StyledFlavorCountBox,
  StyledCountText,
  StyledBackgroundCircle
} from '../../styles/order/OrderStyles';
import popConverter from '../../utilities/popConverter';
import svgResizer from '../../utilities/svgResizer';

const OrderButton = ({ popButton }: { popButton: any }) => {
  const display = useSelector((state: any) => state.displayReducer.display);
  const choice = useSelector((state: any) => state.choiceReducer.choice);
  const order = useSelector((state: any) => state.orderReducer.order);
  const dispatch = useDispatch();

  const FlavorIcon = popButton.svg;
  const { iconWidth, iconHeight } = svgResizer(display, BUTTON_SVG);
  const countFontSize = display.isPortrait ? display.windowHeight * 0.02 : display.windowHeight * 0.03;
  const offsetX = iconHeight * 0.5;
  const offsetY = iconWidth * 0.2;
  const xyAvg = (iconWidth + iconHeight) / 2;
  const theme = {
    gridArea: popButton.popFlavor,
    offsetX: offsetX,
    offsetY: offsetY,
    countFontSize: countFontSize
  };

  if (choice === popButton.popFlavor) {
    return null;
  } else {
    return (
      <>
        <AnimatedFlavorIcon
          theme={theme}
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

      </>
    );
  }
};

export default OrderButton;
