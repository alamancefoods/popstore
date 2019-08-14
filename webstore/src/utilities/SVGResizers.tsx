import { ResizerInterface } from './types'
import {
  BUTTON_SVG, LOGO_SVG,
  IPHONE_X_PORTRAIT
} from '../constants/constants'



export const dynamicViewBox = ( svgCategory: string, deviceType: string, popFlavor?: string): string => {
  let viewBox = 100

  switch(svgCategory){
      case BUTTON_SVG:
      switch(deviceType){
        case IPHONE_X_PORTRAIT:
          viewBox = viewBox * 1.3
          break;
        default:
          break;
      }
  }

  switch(popFlavor){
    case 'Lemon Lime':
      console.log('Bye Felicia')
  }
  console.log(viewBox)

  return `0 0 ${viewBox} ${viewBox}`


}

