import React, { useContext } from 'react';
import { StyledFlavorIcon } from '../../styles/order/OrderStyles';
import styled from 'styled-components';
import { BUTTON_PROPS, BUTTON_SVG, NO_POP_PICKED } from '../../constants/constants';
import { ThemeContext } from 'styled-components';
import popConverter from '../../utilities/popConverter';
import svgResizer from '../../utilities/svgResizer';

const OrderButton = ({addPopToOrder, pickedPop, popFlavor, index } : {
  addPopToOrder: (popFlavor: string) => void,
  pickedPop: string
  popFlavor: string,
  index: number
}) => {
  const BUTTON_PROP = popConverter(popFlavor)
  const theme = {
    gridArea: BUTTON_PROP!.popFlavor,
    color: BUTTON_PROP!.color
  }

  const FlavorIcon = BUTTON_PROP!.svg
  const themeContext = useContext(ThemeContext);
  const { iconWidth, iconHeight } = svgResizer(themeContext)

  return (
    <StyledFlavorIcon theme={theme} component={<FlavorIcon width={iconWidth} height={iconHeight}  onClick={() => pickedPop === NO_POP_PICKED ? addPopToOrder(popFlavor) : '' } />} />
  )
}

export default OrderButton;
//onClick={() => pickedPop === NO_POP_PICKED ? addPopToOrder(popFlavor) : '' }
