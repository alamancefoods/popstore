import React, { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateChoice } from '../../redux/order/actions';
import { NO_CHOICE, BUTTON_SVG } from '../../constants/constants';
import { AnimatedFlavorIcon, StyledFlavorCountBox } from '../../styles/order/OrderStyles';
import popConverter from '../../utilities/popConverter';
import svgResizer from '../../utilities/svgResizer';

const OrderButton = ({ popButton }: { popButton: any }) => {
  const display = useSelector((state: any) => state.displayReducer.display);
  const choice = useSelector((state: any) => state.choiceReducer.choice);
  const order = useSelector((state: any) => state.orderReducer.order);
  const dispatch = useDispatch();
  const theme = {
    gridArea: popButton.popFlavor,
  };

  const FlavorIcon = popButton.svg;
  const { iconWidth, iconHeight } = svgResizer(display, BUTTON_SVG);

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
              newWord={"dumbo"}
              onClick={
                () => choice === NO_CHOICE ? dispatch(updateChoice(popButton.popFlavor)) : ''
              }
            />
          }
        />
        {order[popButton.popFlavor] > 0
          ? <StyledFlavorCountBox theme={theme}
          >{order[popButton.popFlavor]}</StyledFlavorCountBox>
          : null}

      </>
    );
  }
};

export default OrderButton;
