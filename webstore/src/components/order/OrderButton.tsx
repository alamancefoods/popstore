import React, { useContext } from 'react';
import { StyledSVGButton } from '../../styles/order/OrderStyles';
import { BUTTON_PROPS } from '../../constants/constants';
import { ThemeContext } from 'styled-components';

const OrderButton = ({addPopToOrder, popFlavor, index } : {
  addPopToOrder: (popFlavor: string) => void,
  popFlavor: string,
  index: number
}) => {
  const rePopFlavor = popFlavor.replace(/\s+/g, '-')
  const BUTTON_PROP = BUTTON_PROPS.find(theme => theme.popFlavor === rePopFlavor)
  const theme = {
    gridArea: BUTTON_PROP!.popFlavor,
    color: BUTTON_PROP!.color
  }
  const inheritedTheme = useContext(ThemeContext);

  let buttonViewBox = ""

  if(popFlavor === "Lemon Lime"){
    buttonViewBox = "0 0 135 130"
  }else{
    buttonViewBox = "0 0 115 115"
  }

  // onClick={() => addPopToOrder(popFlavor)}
  return (
    <StyledSVGButton viewBox={buttonViewBox} theme={theme} onClick={() => console.log(inheritedTheme)}>
      {BUTTON_PROP!.svg}
    </StyledSVGButton>
  )
}

export default OrderButton;
