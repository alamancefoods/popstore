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

export const NO_POP_PICKED = 'NO_POP_PICKED';

export const SMALL_PHONE = 'SMALL_PHONE';
export const BIG_PHONE = 'BIG_PHONE';
export const SMALL_TABLET = 'SMALL_TABLET';
export const BIG_TABLET = 'BIG_TABLET';
export const HUGE_TABLET = 'HUGE_TABLET';

export const TINY_LANDSCAPE = 'TINY_LANDSCAPE';
export const SMALL_LANDSCAPE = 'SMALL_LANDSCAPE';
export const MEDIUM_LANDSCAPE = 'MEDIUM_LANDSCAPE';
export const BIG_LANDSCAPE = 'BIG_LANDSCAPE';
export const HUGE_LANDSCAPE = 'HUGE_LANDSCAPE';


export const MEDIA_QUERY_THEMES: Array<ThemeType> = [
  {
    deviceType: SMALL_PHONE,
    minWidth: 0,
    maxWidth: 360,
    orientation: 'portrait',
    minAspectRatio: '1/100',
    maxAspectRatio: '99/100',
    leftCol: '0%',
    mainCol: '100%',
    rightCol: '0%',
    topRow: '94px',
    mainRow: '100%',
    bottomRow: '156px',
    entryContainerHeight: '100%',
    isPortrait: true
  },
  {
    deviceType: BIG_PHONE,
    minWidth: 361,
    maxWidth: 767,
    orientation: 'portrait',
    minAspectRatio: '1/100',
    maxAspectRatio: '99/100',
    leftCol: '0%',
    mainCol: '100%',
    rightCol: '0%',
    topRow: '130px',
    mainRow: '100%',
    bottomRow: '198px',
    entryContainerHeight: '100%',
    isPortrait: true
  },
  {
    deviceType: SMALL_TABLET,
    minWidth: 768,
    maxWidth: 1023,
    orientation: 'portrait',
    minAspectRatio: '1/100',
    maxAspectRatio: '99/100',
    leftCol: '0%',
    mainCol: '100%',
    rightCol: '0%',
    topRow: '236px',
    mainRow: '100%',
    bottomRow: '344px',
    entryContainerHeight: '100%',
    isPortrait: true
  },
  {
    deviceType: BIG_TABLET,
    minWidth: 1024,
    maxWidth: 1440,
    orientation: 'portrait',
    minAspectRatio: '1/100',
    maxAspectRatio: '99/100',
    leftCol: '0%',
    mainCol: '100%',
    rightCol: '0%',
    topRow: '213px',
    mainRow: '100%',
    bottomRow: '330px',
    entryContainerHeight: '100%',
    isPortrait: true
  },
  {
    deviceType: HUGE_TABLET,
    minWidth: 1441,
    maxWidth: 1000000,
    orientation: 'portrait',
    minAspectRatio: '1/100',
    maxAspectRatio: '99/100',
    leftCol: '0%',
    mainCol: '100%',
    rightCol: '0%',
    topRow: '15%',
    mainRow: '100%',
    bottomRow: '20%',
    entryContainerHeight: '100%',
    isPortrait: true
  },
  {
    deviceType: TINY_LANDSCAPE,
    minWidth: 0,
    maxWidth: 640,
    orientation: 'landscape',
    minAspectRatio: '100/100',
    maxAspectRatio: '100/1',
    leftCol: '0%',
    mainCol: 'auto',
    rightCol: '180px',
    topRow: '87px',
    mainRow: 'auto',
    bottomRow: '0%',
    entryContainerHeight: '60vh',
    isPortrait: false
  },
  {
    deviceType: SMALL_LANDSCAPE,
    minWidth: 641,
    maxWidth: 823,
    orientation: 'landscape',
    minAspectRatio: '100/100',
    maxAspectRatio: '100/1',
    leftCol: '0%',
    mainCol: 'auto',
    rightCol: '201px',
    topRow: '99px',
    mainRow: '1fr',
    bottomRow: '0%',
    entryContainerHeight: '60vh',
    isPortrait: false
  },
  {
    deviceType: MEDIUM_LANDSCAPE,
    minWidth: 824,
    maxWidth: 1024,
    orientation: 'landscape',
    minAspectRatio: '100/100',
    maxAspectRatio: '100/1',
    leftCol: '0%',
    mainCol: 'auto',
    rightCol: '302px',
    topRow: '178px',
    mainRow: '1fr',
    bottomRow: '0%',
    entryContainerHeight: '60vh',
    isPortrait: false
  },
  {
    deviceType: BIG_LANDSCAPE,
    minWidth: 1025,
    maxWidth: 1500,
    orientation: 'landscape',
    minAspectRatio: '100/100',
    maxAspectRatio: '100/1',
    leftCol: '0%',
    mainCol: 'auto',
    rightCol: '370px',
    topRow: '222px',
    mainRow: '1fr',
    bottomRow: '0%',
    entryContainerHeight: '60vh',
    isPortrait: false
  },
  {
    deviceType: HUGE_LANDSCAPE,
    minWidth: 1501,
    maxWidth: 1000000,
    orientation: 'landscape',
    minAspectRatio: '100/100',
    maxAspectRatio: '100/1',
    leftCol: '0%',
    mainCol: 'auto',
    rightCol: '15%',
    topRow: '20%',
    mainRow: '1fr',
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

