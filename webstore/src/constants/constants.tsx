import { PopInterface, ThemeType } from './types'


const POP_DICTIONARY: PopInterface = {
    'Balance' : 'balance',
    'Total' : 'totalCount',
    'Grape' : 'grapeCount',
    'Orange' : 'orangeCount',
    'Blue Punch' : 'bluePunchCount',
    'Lemon Lime' : 'lemonLimeCount',
    'Pina Colada' : 'pinaColadaCount',
    'Banana' : 'bananaCount',
    'Peach' : 'peachCount',
    'Cherry' : 'cherryCount',
    'Mango' : 'mangoCount',
    'Green Apple' : 'greenAppleCount',
    'Watermelon' : 'watermelonCount',
    'Strawberry' : 'strawberryCount',
    'Guava' : 'guavaCount',
    'Mojito' : 'mojitoCount',
    'Papaya' : 'papayaCount'
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
    deviceType: 'mobilePortrait',
    minWidth: 320,
    maxWidth: 480,
    orientation: 'portrait',
    leftCol: '0%',
    mainCol: '100%',
    rightCol: '0%',
    topRow: '20%',
    mainRow: 'auto',
    bottomRow: '15%'
  },
  {
    deviceType: 'mobileLandscape',
    minWidth: 481,
    maxWidth: 767,
    orientation: 'landscape',
    leftCol: '15%',
    mainCol: 'auto',
    rightCol: '15%',
    topRow: '20%',
    mainRow: 'auto',
    bottomRow: '15%'
  },
  {
    deviceType: 'tabletPortait',
    minWidth: 768,
    maxWidth: 1024,
    orientation: 'portrait',
    leftCol: '20%',
    mainCol: 'auto',
    rightCol: '20%',
    topRow: '20%',
    mainRow: 'auto',
    bottomRow: '15%'
  },
  {
    deviceType: 'tabletLandscape',
    minWidth: 768,
    maxWidth: 1024,
    orientation: 'landscape',
    leftCol: '20%',
    mainCol: 'auto',
    rightCol: '20%',
    topRow: '20%',
    mainRow: 'auto',
    bottomRow: '15%'
  },
  {
    deviceType: 'desktop',
    minWidth: 1024,
    maxWidth: 10000,
    orientation: 'landscape',
    leftCol: '20%',
    mainCol: 'auto',
    rightCol: '20%',
    topRow: '120px',
    mainRow: 'auto',
    bottomRow: '15%'
  },
]

export const BUTTON_THEMES = [
  {
    popFlavor:'Grape',
    gridPosition: 1,
    color: 'purple'
  },
  {
    popFlavor: 'Orange',
    gridPosition: 2,
    color: 'orange'
  },
  {
    popFlavor: 'Blue-Punch',
    gridPosition: 3,
    color: 'blue'
  },
  {
    popFlavor: 'Lemon-Lime',
    gridPosition: 4,
    color: 'green'
  },
  {
    popFlavor: 'Pina-Colada',
    gridPosition: 5,
    color: 'yellow'
  },
  {
    popFlavor: 'Banana',
    gridPosition: 6,
    color: 'yellow'
  },
  {
    popFlavor: 'Peach',
    gridPosition: 7,
    color: 'orange'
  },
  {
    popFlavor: 'Cherry',
    gridPosition: 8,
    color: 'red'
  },
  {
    popFlavor: 'Mango',
    gridPosition: 9,
    color: 'orange'
  },
  {
    popFlavor: 'Green-Apple',
    gridPosition: 10,
    color: 'green'
  },
  {
    popFlavor: 'Watermelon',
    gridPosition: 11,
    color: 'pink'
  },
  {
    popFlavor: 'Strawberry',
    gridPosition: 12,
    color: 'pink'
  },
  {
    popFlavor: 'Guava',
    gridPosition: 13,
    color: 'orange'
  },
  {
    popFlavor: 'Mojito',
    gridPosition: 14,
    color: 'green'
  },
  {
    popFlavor: 'Papaya',
    gridPosition: 15,
    color: 'Orange'
  }
]
