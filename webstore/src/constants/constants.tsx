import { PopInterface } from './types'


const POP_DICTIONARY: PopInterface = {
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

export const TOTAL_POPS = POP_DICTIONARY['Total']
export const MINIMUM_ORDER_SIZE = 5
export default POP_DICTIONARY
