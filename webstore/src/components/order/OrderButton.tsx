import React, { useContext } from 'react';
import { StyledSVGButton } from '../../styles/order/OrderStyles';
import { BUTTON_PROPS, BUTTON_SVG, NO_POP_PICKED } from '../../constants/constants';
import { ThemeContext } from 'styled-components';
import { dynamicViewBox } from '../../utilities/SVGResizers'

const OrderButton = ({addPopToOrder, pickedPop, popFlavor, index } : {
  addPopToOrder: (popFlavor: string) => void,
  pickedPop: string
  popFlavor: string,
  index: number
}) => {
  const rePopFlavor = popFlavor.replace(/\s+/g, '-')
  const BUTTON_PROP = BUTTON_PROPS.find(theme => theme.popFlavor === rePopFlavor)
  const theme = {
    gridArea: BUTTON_PROP!.popFlavor,
    color: BUTTON_PROP!.color
  }
  const themeContext = useContext(ThemeContext);

  //Use dynamicViewBox function to resize svgs according to device type.
  const buttonViewBox = () => {
    let landscapeWidthChunk= (themeContext.windowWidth * 0.8) / 3
    let portraitWidthChunk = themeContext.windowWidth / 2
    let scale = 0
    if(themeContext.isPortrait){
      scale = portraitWidthChunk
    }else{
      scale = landscapeWidthChunk
    }
    return `${-scale / 4} ${-scale / 6} ${scale} ${scale / 1.5}`
  }

  return (
    <StyledSVGButton viewBox={ buttonViewBox() } theme={theme} onClick={() => pickedPop === NO_POP_PICKED ? addPopToOrder(popFlavor) : '' }>{BUTTON_PROP!.svg}</StyledSVGButton>
  )
}

export default OrderButton;
//onClick={() => pickedPop === NO_POP_PICKED ? addPopToOrder(popFlavor) : '' }
