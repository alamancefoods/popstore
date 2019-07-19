import React from 'react';
import { StyledOrderButton } from '../../styles/order/OrderStyles';
import { BUTTON_THEMES } from '../../constants/constants';

const OrderButton = ({addPopToOrder, popFlavor, index } : {
  addPopToOrder: (popFlavor: string) => void,
  popFlavor: string,
  index: number
}) => {

  const rePopFlavor = popFlavor.replace(/\s+/g, '-')
  const BUTTON_THEME = BUTTON_THEMES.find(theme => theme.popFlavor === rePopFlavor)
  const theme = {
    gridArea: BUTTON_THEMES[index].popFlavor,
    color: BUTTON_THEME!.color
  }


  return (
    <StyledOrderButton theme={theme} onClick={() => addPopToOrder(popFlavor) }>
      {popFlavor}
    </StyledOrderButton>
  )
}

export default OrderButton;
