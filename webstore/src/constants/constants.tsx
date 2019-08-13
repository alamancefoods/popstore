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

export const MEDIA_QUERY_THEMES: Array<ThemeType> = [
  {
    deviceType: 'iphoneXPortrait',
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
    deviceType: 'iphoneXLandscape',
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
    deviceType: 'iphone8PlusPortrait',
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
    deviceType: 'iphone8PlusLandscape',
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
    deviceType: 'iphone8Portrait',
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
    deviceType: 'iphone8Landscape',
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
    deviceType: 'iphoneSePortrait',
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
    deviceType: 'iphoneSeLandscape',
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
    deviceType: 'pixelPortrait',
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
    deviceType: 'pixelLandscape',
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
    deviceType: 'pixelPortraitXL',
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
    deviceType: 'pixelLandscapeXL',
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
    deviceType: 'androidPortrait',
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
    deviceType: 'androidLandscape',
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
    deviceType: 'iPadMiniPortrait',
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
    deviceType: 'iPadMiniLandscape',
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
    deviceType: 'iPadPro10Portrait',
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
    deviceType: 'iPadPro10Landscape',
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
    deviceType: 'iPadPro12Portrait',
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
    deviceType: 'iPadPro12Landscape',
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
    deviceType: 'surfacePro3Portrait',
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
    deviceType: 'surfacePro3Landscape',
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
    deviceType: 'surfacePro4Portrait',
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
    deviceType: 'surfacePro4Landscape',
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
    deviceType: 'desktop',
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
    deviceType: 'macBook',
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
    deviceType: 'macBookPro',
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
    deviceType: 'surfaceBook',
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
    deviceType: 'iMac',
    width: 1280,
    height: 720,
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

