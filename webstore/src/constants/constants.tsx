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
    deviceType: 'mobilePortrait',
    minWidth: 0,
    maxWidth: 480,
    orientation: 'portrait',
    leftCol: '0%',
    mainCol: '100%',
    rightCol: '0%',
    topRow: '0%',
    mainRow: '100%',
    bottomRow: '0%',
    entryContainerHeight: '100%',
    isPortrait: true
  },
  {
    deviceType: 'mobileLandscape',
    minWidth: 481,
    maxWidth: 767,
    orientation: 'landscape',
    leftCol: '20px',
    mainCol: 'auto',
    rightCol: '20px',
    topRow: '20px',
    mainRow: 'auto',
    bottomRow: '15%',
    entryContainerHeight: '60vh',
    isPortrait: false
  },
  {
    deviceType: 'tabletPortait',
    minWidth: 768,
    maxWidth: 1024,
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
    deviceType: 'desktop',
    minWidth: 1025,
    maxWidth: 10000,
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

export const BUTTON_THEMES = [
  {
    popFlavor:'Grape',
    color: 'purple'
  },
  {
    popFlavor: 'Orange',
    color: 'orange'
  },
  {
    popFlavor: 'Blue-Punch',
    color: 'blue'
  },
  {
    popFlavor: 'Lemon-Lime',
    color: 'green'
  },
  {
    popFlavor: 'Pineapple',
    color: 'yellow'
  },
  {
    popFlavor: 'Banana',
    color: 'yellow'
  },
  {
    popFlavor: 'Coconut',
    color: 'white'
  },
  {
    popFlavor: 'Cherry',
    color: 'red'
  },
  {
    popFlavor: 'Mango',
    color: 'orange'
  },
  {
    popFlavor: 'Green-Apple',
    color: 'green'
  },
  {
    popFlavor: 'Watermelon',
    color: 'pink'
  },
  {
    popFlavor: 'Strawberry',
    color: 'pink'
  },
  {
    popFlavor: 'Guava',
    color: 'orange'
  },
  {
    popFlavor: 'Mojito',
    color: 'green'
  },
  {
    popFlavor: 'Papaya',
    color: 'Orange'
}
]
