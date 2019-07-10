import { popOrder } from '../store/store'
import { OrderInterface } from '../components/order/types'

export const POP_DICTIONARY = (popOrder: OrderInterface ) => {
  return ({
    'Grape' : popOrder.grapeCount,
    'Orange' : popOrder.orangeCount,
    'Blue Punch' : popOrder.bluePunchCount,
    'Lemon Lime' : popOrder.lemonLimeCount,
    'Pina Colada' : popOrder.pinaColadaCount,
    'Banana' : popOrder.bananaCount,
    'Peach' : popOrder.peachCount,
    'Cherry' : popOrder.cherryCount,
    'Mango' : popOrder.mangoCount,
    'Green Apple' : popOrder.greenAppleCount,
    'Watermelon' : popOrder.watermelonCount,
    'Strawberry' : popOrder.strawberryCount,
    'Guava' : popOrder.guavaCount,
    'Mojito' : popOrder.mojitoCount,
    'Papaya' : popOrder.papayaCount
  })
};
