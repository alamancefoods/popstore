import React from 'react';

const OrderButton = ({addPopToOrder, popFlavor } : {
  addPopToOrder: (popFlavor: string) => void,
  popFlavor: string
}) => {

  return (
    <button onClick={() => addPopToOrder(popFlavor) }>
      {popFlavor}
    </button>
  )
}

export default OrderButton;
