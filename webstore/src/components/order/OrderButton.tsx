import React, { useContext } from 'react';
import { StyledSVGButton } from '../../styles/order/OrderStyles';
import { BUTTON_PROPS, BUTTON_SVG, NO_POP_PICKED } from '../../constants/constants';
import { ThemeContext } from 'styled-components';
import  buttonViewBox  from '../../utilities/buttonViewBox'
import popConverter from '../../utilities/popConverter'

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

  const themeContext = useContext(ThemeContext);
  const customViewBox = buttonViewBox(themeContext);


  return (
    <StyledSVGButton viewBox={customViewBox} theme={theme} onClick={() => pickedPop === NO_POP_PICKED ? addPopToOrder(popFlavor) : '' }>{BUTTON_PROP!.svg}</StyledSVGButton>
  )
}

export default OrderButton;
//onClick={() => pickedPop === NO_POP_PICKED ? addPopToOrder(popFlavor) : '' }
