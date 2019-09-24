import React from 'react';
import { useSelector } from 'react-redux';
import { convertPopCountToCharge } from '../../utilities/convertPopCountToCharge';

const Balance = () => {
  const order = useSelector((state: any) => state.orderReducer);

  if (order.totalCount > 0) {
    return (
      <>
        Balance: ${convertPopCountToCharge(order.totalCount, false)}
      </>
    );
  } else {
    return (
      null
    );
  }
};

export default Balance;
