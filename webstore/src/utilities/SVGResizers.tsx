import { ResizerInterface } from './types'
import {
  BUTTON_SVG, LOGO_SVG,
  IPHONE_X_PORTRAIT, IPHONE_8_PLUS_PORTRAIT, IPHONE_8_PORTRAIT,
  IPHONE_SE_PORTRAIT, PIXEL_PORTRAIT, PIXEL_XL_PORTRAIT, ANDROID_PORTRAIT
} from '../constants/constants'



export const dynamicViewBox = ( svgCategory: string, deviceType: string, popFlavor?: string): string => {
  let viewBox = 100

  switch(svgCategory){
      case BUTTON_SVG:
      switch(deviceType){
        case IPHONE_X_PORTRAIT:
        case IPHONE_8_PORTRAIT:
        case IPHONE_SE_PORTRAIT:
        case PIXEL_PORTRAIT:
        case PIXEL_XL_PORTRAIT:
        case ANDROID_PORTRAIT:
          viewBox = viewBox * 1.4
          break;
        case IPHONE_8_PLUS_PORTRAIT:
          viewBox = viewBox * 1.7
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

