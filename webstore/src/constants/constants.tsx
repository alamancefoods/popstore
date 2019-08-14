import React from 'react';
import { ReactComponent as Banana } from '../static/banana.svg';
import { ReactComponent as BluePunch } from '../static/blue_punch.svg';
import { ReactComponent as Cherry } from '../static/cherries.svg';
import { ReactComponent as Coconut } from '../static/coconut.svg';
import { ReactComponent as Grape } from '../static/grape.svg';
import { ReactComponent as GreenApple } from '../static/green_apple.svg';
import { ReactComponent as Guava } from '../static/guava.svg';
import { ReactComponent as LemonLime } from '../static/lemon_lime.svg';
import { ReactComponent as Mango } from '../static/mango.svg';
import { ReactComponent as Mojito } from '../static/mojito.svg';
import { ReactComponent as  Orange} from '../static/orange.svg';
import { ReactComponent as Papaya } from '../static/papaya.svg';
import { ReactComponent as Pineapple } from '../static/pineapple.svg';
import { ReactComponent as Strawberry } from '../static/strawberry.svg';
import { ReactComponent as Watermelon } from '../static/watermelon.svg';

import { PopInterface, ThemeType } from './types'


const POP_DICTIONARY: PopInterface = {
  'Balance' : 'balance',
  'Total' : 'totalCount',
  'Grape' : 'grape',
  'Orange' : 'orange',
  'Blue Punch' : 'bluePunch',
  'Lemon Lime' : 'lemonLime',
  'Pineapple' : 'pineapple',
  'Banana' : 'banana',
  'Coconut' : 'coconut',
  'Cherry' : 'cherry',
  'Mango' : 'mango',
  'Green Apple' : 'greenApple',
  'Watermelon' : 'watermelon',
  'Strawberry' : 'strawberry',
  'Guava' : 'guava',
  'Mojito' : 'mojito',
  'Papaya' : 'papaya'
}

export const STATE_LIST: string[] = [
  'AL',
  'AZ',
  'AR',
  'CA',
  'CO',
  'CT',
  'DC',
  'DE',
  'FL',
  'GA',
  'ID',
  'IL',
  'IN',
  'IA',
  'KS',
  'KY',
  'LA',
  'ME',
  'MD',
  'MA',
  'MI',
  'MN',
  'MS',
  'MO',
  'MT',
  'NE',
  'NV',
  'NH',
  'NJ',
  'NM',
  'NY',
  'NC',
  'ND',
  'OH',
  'OK',
  'OR',
  'PA',
  'RI',
  'SC',
  'SD',
  'TN',
  'TX',
  'UT',
  'VT',
  'VA',
  'WA',
  'WV',
  'WI',
  'WY'
]

export const TOTAL_POPS = POP_DICTIONARY['Total']
export const BALANCE = POP_DICTIONARY['Balance']
export const MINIMUM_ORDER_SIZE = 5

export default POP_DICTIONARY

export const BUTTON_SVG = 'BUTTON_SVG';
export const LOGO_SVG = 'LOGO_SVG';

// Mobile Portraits
export const IPHONE_X_PORTRAIT = 'IPHONE_X_PORTRAIT';
export const IPHONE_8_PLUS_PORTRAIT = 'IPHONE_8_PLUS_PORTRAIT';
export const IPHONE_8_PORTRAIT = 'IPHONE_8_PORTRAIT';
export const IPHONE_SE_PORTRAIT = 'IPHONE_SE_PORTRAIT';
export const PIXEL_PORTRAIT = 'PIXEL_PORTRAIT';
export const PIXEL_XL_PORTRAIT = 'PIXEL_XL_PORTRAIT';
export const ANDROID_PORTRAIT = 'ANDROID_PORTRAIT';

// Mobile Landscapes
export const IPHONE_X_LANDSCAPE = 'IPHONE_X_LANDSCAPE';
export const IPHONE_8_PLUS_LANDSCAPE = 'IPHONE_8_PLUS_LANDSCAPE';
export const IPHONE_8_LANDSCAPE = 'IPHONE_8_LANDSCAPE';
export const IPHONE_SE_LANDSCAPE = 'IPHONE_SE_LANDSCAPE';
export const PIXEL_LANDSCAPE = 'PIXEL_LANDSCAPE';
export const PIXEL_XL_LANDSCAPE = 'PIXEL_XL_LANDSCAPE';
export const ANDROID_LANDSCAPE = 'ANDROID_LANDSCAPE';

// Tablet Portraits
export const IPAD_MINI_PORTRAIT = 'IPAD_MINI_PORTRAIT';
export const IPAD_PRO_10_PORTRAIT = 'IPAD_PRO_10_PORTRAIT';
export const IPAD_PRO_12_PORTRAIT = 'IPAD_PRO_12_PORTRAIT';
export const SURFACE_PRO_3_PORTRAIT = 'SURFACE_PRO_3_PORTRAIT';
export const SURFACE_PRO_4_PORTRAIT = 'SURFACE_PRO_4_PORTRAIT';

// Tablet Landscapes
export const IPAD_MINI_LANDSCAPE = 'IPAD_MINI_LANDSCAPE';
export const IPAD_PRO_10_LANDSCAPE = 'IPAD_PRO_10_LANDSCAPE';
export const IPAD_PRO_12_LANDSCAPE = 'IPAD_PRO_12_LANDSCAPE';
export const SURFACE_PRO_3_LANDSCAPE = 'SURFACE_PRO_3_LANDSCAPE';
export const SURFACE_PRO_4_LANDSCAPE = 'SURFACE_PRO_4_LANDSCAPE';

// Desktops
export const DESKTOP = 'DESKTOP';
export const MACBOOK = 'MACBOOK';
export const MACBOOK_PRO = 'MACBOOK_PRO';
export const SURFACE_BOOK = 'SURFACE_BOOK';
export const IMAC = 'IMAC';


export const MEDIA_QUERY_THEMES: Array<ThemeType> = [
  {
    deviceType: IPHONE_X_PORTRAIT,
    width: 375,
    height: 812,
    orientation: 'portrait',
    leftCol: '0%',
    mainCol: '100%',
    rightCol: '0%',
    topRow: '125px',
    mainRow: '500px',
    bottomRow: '187px',
    entryContainerHeight: '100%',
    isPortrait: true
  },
  {
    deviceType: IPHONE_X_LANDSCAPE,
    width: 812,
    height: 375,
    orientation: 'landscape',
    leftCol: '41px',
    mainCol: '600px',
    rightCol: '71px',
    topRow: '105px',
    mainRow: '270px',
    bottomRow: '0px',
    entryContainerHeight: '100%',
    isPortrait: false
  },
  {
    deviceType: IPHONE_8_PLUS_PORTRAIT,
    width: 414,
    height: 736,
    orientation: 'portrait',
    leftCol: '0%',
    mainCol: '100%',
    rightCol: '0%',
    topRow: '125px',
    mainRow: '500px',
    bottomRow: '187px',
    entryContainerHeight: '100%',
    isPortrait: true
  },
  {
    deviceType: IPHONE_8_PLUS_LANDSCAPE,
    width: 736,
    height: 414,
    orientation: 'landscape',
    leftCol: '0%',
    mainCol: '100%',
    rightCol: '0%',
    topRow: '125px',
    mainRow: '500px',
    bottomRow: '187px',
    entryContainerHeight: '100%',
    isPortrait: false
  },
  {
    deviceType: IPHONE_8_PORTRAIT,
    width: 375,
    height: 667,
    orientation: 'portrait',
    leftCol: '0%',
    mainCol: '100%',
    rightCol: '0%',
    topRow: '125px',
    mainRow: '500px',
    bottomRow: '187px',
    entryContainerHeight: '100%',
    isPortrait: true
  },
  {
    deviceType: IPHONE_8_LANDSCAPE,
    width: 667,
    height: 375,
    orientation: 'landscape',
    leftCol: '0%',
    mainCol: '100%',
    rightCol: '0%',
    topRow: '125px',
    mainRow: '500px',
    bottomRow: '187px',
    entryContainerHeight: '100%',
    isPortrait: false
  },
  {
    deviceType: IPHONE_SE_PORTRAIT,
    width: 320,
    height: 568,
    orientation: 'portrait',
    leftCol: '0%',
    mainCol: '100%',
    rightCol: '0%',
    topRow: '100px',
    mainRow: '350px',
    bottomRow: '118px',
    entryContainerHeight: '100%',
    isPortrait: true
  },
  {
    deviceType: IPHONE_SE_LANDSCAPE,
    width: 568,
    height: 320,
    orientation: 'landscape',
    leftCol: '0%',
    mainCol: '100%',
    rightCol: '0%',
    topRow: '100px',
    mainRow: '350px',
    bottomRow: '118px',
    entryContainerHeight: '100%',
    isPortrait: false
  },
  {
    deviceType: PIXEL_PORTRAIT,
    width: 411,
    height: 731,
    orientation: 'portrait',
    leftCol: '0%',
    mainCol: '100%',
    rightCol: '0%',
    topRow: '100px',
    mainRow: '450px',
    bottomRow: '181px',
    entryContainerHeight: '100%',
    isPortrait: true
  },
  {
    deviceType: PIXEL_LANDSCAPE,
    width: 731,
    height: 411,
    orientation: 'landscape',
    leftCol: '0%',
    mainCol: '100%',
    rightCol: '0%',
    topRow: '100px',
    mainRow: '450px',
    bottomRow: '181px',
    entryContainerHeight: '100%',
    isPortrait: false
  },
  {
    deviceType: PIXEL_XL_PORTRAIT,
    width: 411,
    height: 823,
    orientation: 'portrait',
    leftCol: '0%',
    mainCol: '100%',
    rightCol: '0%',
    topRow: '100px',
    mainRow: '450px',
    bottomRow: '181px',
    entryContainerHeight: '100%',
    isPortrait: true
  },
  {
    deviceType: PIXEL_XL_LANDSCAPE,
    width: 823,
    height: 411,
    orientation: 'landscape',
    leftCol: '0%',
    mainCol: '100%',
    rightCol: '0%',
    topRow: '100px',
    mainRow: '450px',
    bottomRow: '181px',
    entryContainerHeight: '100%',
    isPortrait: false
  },
  {
    deviceType: ANDROID_PORTRAIT,
    width: 360,
    height: 640,
    orientation: 'portrait',
    leftCol: '0%',
    mainCol: '100%',
    rightCol: '0%',
    topRow: '100px',
    mainRow: '400px',
    bottomRow: '140px',
    entryContainerHeight: '100%',
    isPortrait: true
  },
  {
    deviceType: ANDROID_LANDSCAPE,
    width: 640,
    height: 360,
    orientation: 'landscape',
    leftCol: '0%',
    mainCol: '100%',
    rightCol: '0%',
    topRow: '100px',
    mainRow: '400px',
    bottomRow: '140px',
    entryContainerHeight: '100%',
    isPortrait: false
  },
  {
    deviceType: IPAD_MINI_PORTRAIT,
    width: 768,
    height: 1024,
    orientation: 'portrait',
    leftCol: '50px',
    mainCol: 'auto',
    rightCol: '50px',
    topRow: '100px',
    mainRow: 'auto',
    bottomRow: '15%',
    entryContainerHeight: '60vh',
    isPortrait: true
  },
  {
    deviceType: IPAD_MINI_LANDSCAPE,
    width: 1024,
    height: 768,
    orientation: 'landscape',
    leftCol: '50px',
    mainCol: 'auto',
    rightCol: '50px',
    topRow: '100px',
    mainRow: 'auto',
    bottomRow: '15%',
    entryContainerHeight: '60vh',
    isPortrait: false
  },
  {
    deviceType: IPAD_PRO_10_PORTRAIT,
    width: 834,
    height: 1112,
    orientation: 'portrait',
    leftCol: '50px',
    mainCol: 'auto',
    rightCol: '50px',
    topRow: '100px',
    mainRow: 'auto',
    bottomRow: '15%',
    entryContainerHeight: '60vh',
    isPortrait: true
  },
  {
    deviceType: IPAD_PRO_10_LANDSCAPE,
    width: 1112,
    height: 834,
    orientation: 'landscape',
    leftCol: '50px',
    mainCol: 'auto',
    rightCol: '50px',
    topRow: '100px',
    mainRow: 'auto',
    bottomRow: '15%',
    entryContainerHeight: '60vh',
    isPortrait: false
  },
  {
    deviceType: IPAD_PRO_12_PORTRAIT,
    width: 1024,
    height: 1366,
    orientation: 'portrait',
    leftCol: '50px',
    mainCol: 'auto',
    rightCol: '50px',
    topRow: '100px',
    mainRow: 'auto',
    bottomRow: '15%',
    entryContainerHeight: '60vh',
    isPortrait: true
  },
  {
    deviceType: IPAD_PRO_12_LANDSCAPE,
    width: 1366,
    height: 1024,
    orientation: 'landscape',
    leftCol: '50px',
    mainCol: 'auto',
    rightCol: '50px',
    topRow: '100px',
    mainRow: 'auto',
    bottomRow: '15%',
    entryContainerHeight: '60vh',
    isPortrait: false
  },
  {
    deviceType: SURFACE_PRO_3_PORTRAIT,
    width: 990,
    height: 1440,
    orientation: 'portrait',
    leftCol: '50px',
    mainCol: 'auto',
    rightCol: '50px',
    topRow: '100px',
    mainRow: 'auto',
    bottomRow: '15%',
    entryContainerHeight: '60vh',
    isPortrait: true
  },
  {
    deviceType: SURFACE_PRO_3_LANDSCAPE,
    width: 1440,
    height: 990,
    orientation: 'landscape',
    leftCol: '50px',
    mainCol: 'auto',
    rightCol: '50px',
    topRow: '100px',
    mainRow: 'auto',
    bottomRow: '15%',
    entryContainerHeight: '60vh',
    isPortrait: false
  },
  {
    deviceType: SURFACE_PRO_4_PORTRAIT,
    width: 912,
    height: 1368,
    orientation: 'portrait',
    leftCol: '50px',
    mainCol: 'auto',
    rightCol: '50px',
    topRow: '100px',
    mainRow: 'auto',
    bottomRow: '15%',
    entryContainerHeight: '60vh',
    isPortrait: true
  },
  {
    deviceType: SURFACE_PRO_4_LANDSCAPE,
    width: 1368,
    height: 912,
    orientation: 'landscape',
    leftCol: '50px',
    mainCol: 'auto',
    rightCol: '50px',
    topRow: '100px',
    mainRow: 'auto',
    bottomRow: '15%',
    entryContainerHeight: '60vh',
    isPortrait: false
  },
  {
    deviceType: DESKTOP,
    width: 1440,
    height: 1024,
    orientation: 'landscape',
    leftCol: '20%',
    mainCol: 'auto',
    rightCol: '20%',
    topRow: '120px',
    mainRow: 'auto',
    bottomRow: '15%',
    entryContainerHeight: '60vh',
    isPortrait: false
  },
  {
    deviceType: MACBOOK,
    width: 1152,
    height: 700,
    orientation: 'landscape',
    leftCol: '20%',
    mainCol: 'auto',
    rightCol: '20%',
    topRow: '120px',
    mainRow: 'auto',
    bottomRow: '15%',
    entryContainerHeight: '60vh',
    isPortrait: false
  },
  {
    deviceType: MACBOOK_PRO,
    width: 1440,
    height: 900,
    orientation: 'landscape',
    leftCol: '20%',
    mainCol: 'auto',
    rightCol: '20%',
    topRow: '120px',
    mainRow: 'auto',
    bottomRow: '15%',
    entryContainerHeight: '60vh',
    isPortrait: false
  },
  {
    deviceType: SURFACE_BOOK,
    width: 1500,
    height: 1000,
    orientation: 'landscape',
    leftCol: '20%',
    mainCol: 'auto',
    rightCol: '20%',
    topRow: '120px',
    mainRow: 'auto',
    bottomRow: '15%',
    entryContainerHeight: '60vh',
    isPortrait: false
  },
  {
    deviceType: IMAC,
    width: 1280,
    height: 721,
    orientation: 'landscape',
    leftCol: '20%',
    mainCol: 'auto',
    rightCol: '20%',
    topRow: '120px',
    mainRow: 'auto',
    bottomRow: '15%',
    entryContainerHeight: '60vh',
    isPortrait: false
  },
]

export const BUTTON_PROPS = [
  {
    popFlavor:'Grape',
    color: 'purple',
    svg: <Grape />
  },
  {
    popFlavor: 'Orange',
    color: 'orange',
    svg: <Orange />
  },
  {
    popFlavor: 'Blue-Punch',
    color: 'blue',
    svg: <BluePunch />
  },
  {
    popFlavor: 'Lemon-Lime',
    color: 'green',
    svg: <LemonLime />
  },
  {
    popFlavor: 'Pineapple',
    color: 'yellow',
    svg: <Pineapple />
  },
  {
    popFlavor: 'Banana',
    color: 'yellow',
    svg: <Banana />
  },
  {
    popFlavor: 'Coconut',
    color: 'white',
    svg: <Coconut />
  },
  {
    popFlavor: 'Cherry',
    color: 'red',
    svg: <Cherry />
  },
  {
    popFlavor: 'Mango',
    color: 'orange',
    svg: <Mango />
  },
  {
    popFlavor: 'Green-Apple',
    color: 'green',
    svg: <GreenApple />
  },
  {
    popFlavor: 'Watermelon',
    color: 'pink',
    svg: <Watermelon />
  },
  {
    popFlavor: 'Strawberry',
    color: 'pink',
    svg: <Strawberry />
  },
  {
    popFlavor: 'Guava',
    color: 'orange',
    svg: <Guava />
  },
  {
    popFlavor: 'Mojito',
    color: 'green',
    svg: <Mojito />
  },
  {
    popFlavor: 'Papaya',
    color: 'Orange',
    svg: <Papaya />
  }
]

