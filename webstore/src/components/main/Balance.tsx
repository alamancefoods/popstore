import React from 'react';
import { useSelector } from 'react-redux';
import { convertPopCountToCharge } from '../../utilities/convertPopCountToCharge';

const Balance = ({ className }: { className?: string }) => {
  const order = useSelector((state: any) => state.orderReducer.order);

  if (order.totalCount > 0) {
    return (
      <div>
        Balance: ${convertPopCountToCharge(order.totalCount, false)}
      </div>
    );
  } else {
    return (
      null
    );
  }
};

export default Balance;
