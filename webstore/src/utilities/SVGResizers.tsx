import { ResizerInterface } from './types'
import {
  BUTTON_SVG, LOGO_SVG,
  SMALL_PHONE, BIG_PHONE, SMALL_TABLET, BIG_TABLET, HUGE_TABLET,
  TINY_LANDSCAPE, SMALL_LANDSCAPE, BIG_LANDSCAPE, HUGE_LANDSCAPE
} from '../constants/constants'



export const dynamicViewBox = ( svgCategory: string, deviceType: string, popFlavor?: string): string => {
  let viewBox = 100

  switch(svgCategory){
      case BUTTON_SVG:
      switch(deviceType){
        case SMALL_PHONE:
        case BIG_PHONE:
          viewBox = viewBox * 2
          break;
        case SMALL_TABLET:
        case BIG_TABLET:
        case HUGE_TABLET:
          viewBox = viewBox * 2
          break;
        case SMALL_LANDSCAPE:
        case BIG_LANDSCAPE:
        case HUGE_LANDSCAPE:
          viewBox = viewBox * 1.7
        case TINY_LANDSCAPE:
          viewBox = viewBox * 0.7
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

