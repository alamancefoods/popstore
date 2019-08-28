import { ResizerInterface } from './types'
import {
  BUTTON_SVG, LOGO_SVG,
  SMALL_PHONE, BIG_PHONE, SMALL_TABLET, BIG_TABLET, HUGE_TABLET,
  TINY_LANDSCAPE, SMALL_LANDSCAPE, BIG_LANDSCAPE, HUGE_LANDSCAPE,
  MEDIUM_LANDSCAPE
} from '../constants/constants'



export const dynamicViewBox = ( svgCategory: string, deviceType: string, popFlavor?: string): string => {
  let viewBox = 100

  switch(svgCategory){
      case BUTTON_SVG:
      switch(deviceType){
        case SMALL_PHONE:
        case BIG_PHONE:
          viewBox = viewBox * 3
          break;
        case SMALL_TABLET:
          viewBox = viewBox * 3
          break;
        case BIG_TABLET:
          viewBox = viewBox * 4
          break;
        case HUGE_TABLET:
          viewBox = viewBox * 4
          break;
        case SMALL_LANDSCAPE:
          viewBox = viewBox * 0.8
          break;
        case MEDIUM_LANDSCAPE:
          viewBox = viewBox * 0.7
          break;
        case BIG_LANDSCAPE:
        case HUGE_LANDSCAPE:
          viewBox = viewBox * 1.7
          break;
        case TINY_LANDSCAPE:
          viewBox = viewBox * 1.2
          break;
        default:
          break;
          }
    case LOGO_SVG:
      switch(deviceType){
        case SMALL_PHONE:
        case BIG_PHONE:
          viewBox = viewBox * 1.4
          break;
        case SMALL_TABLET:
        case BIG_TABLET:
        case HUGE_TABLET:
          viewBox = viewBox * 1
          break;
        case SMALL_LANDSCAPE:
          viewBox = viewBox * 1.5
        case BIG_LANDSCAPE:
        case HUGE_LANDSCAPE:
          viewBox = viewBox * 0.9
          break;
        case TINY_LANDSCAPE:
          viewBox = viewBox * 1.3
          break;
        default:
          break;
      }
  }
  switch(popFlavor){
    case 'Lemon Lime':
    break;
  }

  let finalViewBox = `0 0 ${viewBox} ${viewBox}`
  let xyOffset= 0

  if(svgCategory === BUTTON_SVG){
    xyOffset= viewBox / 3
    finalViewBox = `-${xyOffset} -${xyOffset} ${viewBox} ${viewBox * (2/3)}`
  }

  return finalViewBox
}

