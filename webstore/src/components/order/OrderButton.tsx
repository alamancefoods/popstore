import React, { useContext } from 'react';
import { StyledSVGButton } from '../../styles/order/OrderStyles';
import { BUTTON_PROPS, BUTTON_SVG } from '../../constants/constants';
import { ThemeContext } from 'styled-components';
import { dynamicViewBox } from '../../utilities/SVGResizers'

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
  const buttonViewBox = dynamicViewBox(
    BUTTON_SVG,
    inheritedTheme.deviceType,
    popFlavor
  )

  return (
    <StyledSVGButton viewBox={buttonViewBox} theme={theme} onClick={() => console.log(inheritedTheme) }>{BUTTON_PROP!.svg}</StyledSVGButton>
  )
}

export default OrderButton;

// onClick={() => addPopToOrder(popFlavor)}
