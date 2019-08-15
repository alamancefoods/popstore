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
    minWidth: 375,
    minHeight: 812,
    orientation: 'portrait',
    leftCol: '0%',
    mainCol: '100%',
    rightCol: '0%',
    topRow: '112px',
    mainRow: '500px',
    bottomRow: '200px',
    entryContainerHeight: '100%',
    isPortrait: true
  },
  {
    deviceType: IPHONE_X_LANDSCAPE,
    minWidth: 812,
    minHeight: 375,
    orientation: 'landscape',
    leftCol: '30px',
    mainCol: '570px',
    rightCol: '212px',
    topRow: '87px',
    mainRow: '288px',
    bottomRow: '0px',
    entryContainerHeight: '100%',
    isPortrait: false
  },
  {
    deviceType: IPHONE_8_PLUS_PORTRAIT,
    minWidth: 414,
    minHeight: 736,
    orientation: 'portrait',
    leftCol: '0px',
    mainCol: '100%',
    rightCol: '0px',
    topRow: '106px',
    mainRow: '450px',
    bottomRow: '180px',
    entryContainerHeight: '100%',
    isPortrait: true
  },
  {
    deviceType: IPHONE_8_PLUS_LANDSCAPE,
    minWidth: 736,
    minHeight: 414,
    orientation: 'landscape',
    leftCol: '0px',
    mainCol: '540px',
    rightCol: '196px',
    topRow: '93px',
    mainRow: '321px',
    bottomRow: '0px',
    entryContainerHeight: '100%',
    isPortrait: false
  },
  {
    deviceType: IPHONE_8_PORTRAIT,
    minWidth: 375,
    minHeight: 667,
    orientation: 'portrait',
    leftCol: '0%',
    mainCol: '100%',
    rightCol: '0%',
    topRow: '93px',
    mainRow: '410px',
    bottomRow: '164px',
    entryContainerHeight: '100%',
    isPortrait: true
  },
  {
    deviceType: IPHONE_8_LANDSCAPE,
    minWidth: 667,
    minHeight: 375,
    orientation: 'landscape',
    leftCol: '0%',
    mainCol: '490px',
    rightCol: '177px',
    topRow: '90px',
    mainRow: '285px',
    bottomRow: '0px',
    entryContainerHeight: '100%',
    isPortrait: false
  },
  {
    deviceType: IPHONE_SE_PORTRAIT,
    minWidth: 320,
    minHeight: 568,
    orientation: 'portrait',
    leftCol: '0%',
    mainCol: '100%',
    rightCol: '0%',
    topRow: '85px',
    mainRow: '345px',
    bottomRow: '138px',
    entryContainerHeight: '100%',
    isPortrait: true
  },
  {
    deviceType: IPHONE_SE_LANDSCAPE,
    minWidth: 568,
    minHeight: 320,
    orientation: 'landscape',
    leftCol: '0%',
    mainCol: '420px',
    rightCol: '148px',
    topRow: '74px',
    mainRow: '246px',
    bottomRow: '0%',
    entryContainerHeight: '100%',
    isPortrait: false
  },
  {
    deviceType: PIXEL_PORTRAIT,
    minWidth: 411,
    minHeight: 731,
    orientation: 'portrait',
    leftCol: '0%',
    mainCol: '100%',
    rightCol: '0%',
    topRow: '108px',
    mainRow: '445px',
    bottomRow: '178px',
    entryContainerHeight: '100%',
    isPortrait: true
  },
  {
    deviceType: PIXEL_LANDSCAPE,
    minWidth: 731,
    minHeight: 411,
    orientation: 'landscape',
    leftCol: '0%',
    mainCol: '530px',
    rightCol: '201px',
    topRow: '99px',
    mainRow: '312px',
    bottomRow: '0%',
    entryContainerHeight: '100%',
    isPortrait: false
  },
  {
    deviceType: PIXEL_XL_PORTRAIT,
    minWidth: 411,
    minHeight: 823,
    orientation: 'portrait',
    leftCol: '0%',
    mainCol: '100%',
    rightCol: '0%',
    topRow: '130px',
    mainRow: '495px',
    bottomRow: '198px',
    entryContainerHeight: '100%',
    isPortrait: true
  },
  {
    deviceType: PIXEL_XL_LANDSCAPE,
    minWidth: 823,
    minHeight: 411,
    orientation: 'landscape',
    leftCol: '0%',
    mainCol: '600px',
    rightCol: '223px',
    topRow: '99px',
    mainRow: '312px',
    bottomRow: '0%',
    entryContainerHeight: '100%',
    isPortrait: false
  },
  {
    deviceType: ANDROID_PORTRAIT,
    minWidth: 360,
    minHeight: 640,
    orientation: 'portrait',
    leftCol: '0%',
    mainCol: '100%',
    rightCol: '0%',
    topRow: '94px',
    mainRow: '390px',
    bottomRow: '156px',
    entryContainerHeight: '100%',
    isPortrait: true
  },
  {
    deviceType: ANDROID_LANDSCAPE,
    minWidth: 640,
    minHeight: 360,
    orientation: 'landscape',
    leftCol: '0%',
    mainCol: '460px',
    rightCol: '180px',
    topRow: '87px',
    mainRow: '360px',
    bottomRow: '0%',
    entryContainerHeight: '100%',
    isPortrait: false
  },
  {
    deviceType: IPAD_MINI_PORTRAIT,
    minWidth: 768,
    minHeight: 1024,
    orientation: 'portrait',
    leftCol: '50px',
    mainCol: 'auto',
    rightCol: '50px',
    topRow: '170px',
    mainRow: '610px',
    bottomRow: '244px',
    entryContainerHeight: '60vh',
    isPortrait: true
  },
  {
    deviceType: IPAD_MINI_LANDSCAPE,
    minWidth: 1024,
    minHeight: 768,
    orientation: 'landscape',
    leftCol: '0%',
    mainCol: '733px',
    rightCol: '291px',
    topRow: '178px',
    mainRow: '590px',
    bottomRow: '0px',
    entryContainerHeight: '60vh',
    isPortrait: false
  },
  {
    deviceType: IPAD_PRO_10_PORTRAIT,
    minWidth: 834,
    minHeight: 1112,
    orientation: 'portrait',
    leftCol: '50px',
    mainCol: 'auto',
    rightCol: '50px',
    topRow: '181px',
    mainRow: '665px',
    bottomRow: '266px',
    entryContainerHeight: '60vh',
    isPortrait: true
  },
  {
    deviceType: IPAD_PRO_10_LANDSCAPE,
    minWidth: 1112,
    minHeight: 834,
    orientation: 'landscape',
    leftCol: '0px',
    mainCol: '810px',
    rightCol: '1112px',
    topRow: '178px',
    mainRow: '656px',
    bottomRow: '0%',
    entryContainerHeight: '60vh',
    isPortrait: false
  },
  {
    deviceType: IPAD_PRO_12_PORTRAIT,
    minWidth: 1024,
    minHeight: 1366,
    orientation: 'portrait',
    leftCol: '50px',
    mainCol: 'auto',
    rightCol: '50px',
    topRow: '232px',
    mainRow: '810px',
    bottomRow: '324px',
    entryContainerHeight: '60vh',
    isPortrait: true
  },
  {
    deviceType: IPAD_PRO_12_LANDSCAPE,
    minWidth: 1366,
    minHeight: 1024,
    orientation: 'landscape',
    leftCol: '0%',
    mainCol: '965px',
    rightCol: '401px',
    topRow: '220px',
    mainRow: '804px',
    bottomRow: '0%',
    entryContainerHeight: '60vh',
    isPortrait: false
  },
  {
    deviceType: SURFACE_PRO_3_PORTRAIT,
    minWidth: 990,
    minHeight: 1440,
    orientation: 'portrait',
    leftCol: '50px',
    mainCol: 'auto',
    rightCol: '50px',
    topRow: '236px',
    mainRow: '860px',
    bottomRow: '344px',
    entryContainerHeight: '60vh',
    isPortrait: true
  },
  {
    deviceType: SURFACE_PRO_3_LANDSCAPE,
    minWidth: 1440,
    minHeight: 990,
    orientation: 'landscape',
    leftCol: '0%',
    mainCol: '1050px',
    rightCol: '390px',
    topRow: '216px',
    mainRow: '774px',
    bottomRow: '0%',
    entryContainerHeight: '60vh',
    isPortrait: false
  },
  {
    deviceType: SURFACE_PRO_4_PORTRAIT,
    minWidth: 912,
    minHeight: 1368,
    orientation: 'portrait',
    leftCol: '50px',
    mainCol: 'auto',
    rightCol: '50px',
    topRow: '213px',
    mainRow: '825px',
    bottomRow: '330px',
    entryContainerHeight: '60vh',
    isPortrait: true
  },
  {
    deviceType: SURFACE_PRO_4_LANDSCAPE,
    minWidth: 1368,
    minHeight: 912,
    orientation: 'landscape',
    leftCol: '0px',
    mainCol: '990px',
    rightCol: '378px',
    topRow: '210px',
    mainRow: '702px',
    bottomRow: '0%',
    entryContainerHeight: '60vh',
    isPortrait: false
  },
  {
    deviceType: DESKTOP,
    minWidth: 1440,
    minHeight: 1024,
    orientation: 'landscape',
    leftCol: '0%',
    mainCol: '1070px',
    rightCol: '370px',
    topRow: '244px',
    mainRow: '780px',
    bottomRow: '0%',
    entryContainerHeight: '60vh',
    isPortrait: false
  },
  {
    deviceType: MACBOOK,
    minWidth: 1152,
    minHeight: 700,
    orientation: 'landscape',
    leftCol: '0%',
    mainCol: '880px',
    rightCol: '272px',
    topRow: '157px',
    mainRow: '543px',
    bottomRow: '0%',
    entryContainerHeight: '60vh',
    isPortrait: false
  },
  {
    deviceType: MACBOOK_PRO,
    minWidth: 1440,
    minHeight: 900,
    orientation: 'landscape',
    leftCol: '0%',
    mainCol: '1070px',
    rightCol: '370px',
    topRow: '222px',
    mainRow: '678px',
    bottomRow: '0%',
    entryContainerHeight: '60vh',
    isPortrait: false
  },
  {
    deviceType: SURFACE_BOOK,
    minWidth: 1500,
    minHeight: 1000,
    orientation: 'landscape',
    leftCol: '0%',
    mainCol: '1090px',
    rightCol: '410px',
    topRow: '224px',
    mainRow: '776px',
    bottomRow: '0%',
    entryContainerHeight: '60vh',
    isPortrait: false
  },
  {
    deviceType: IMAC,
    minWidth: 1280,
    minHeight: 721,
    orientation: 'landscape',
    leftCol: '0%',
    mainCol: '1000px',
    rightCol: '280px',
    topRow: '174px',
    mainRow: '546px',
    bottomRow: '0%',
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

