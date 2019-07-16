import { PopInterface } from './types'


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
