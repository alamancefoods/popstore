import React, { useState }from 'react';
import { OrderInterface } from './types'
import { popOrder, buttonList} from '../../store/store'
import { POP_DICTIONARY } from '../../constants/constants'

const Order: React.FC = () => {
  const [order, setOrder] = useState<OrderInterface>(popOrder)
  const [flavorList, setFlavorList] = useState<Array<string>>([])


  return(
    <p>Hello</p>
  )

}


export default Order;
