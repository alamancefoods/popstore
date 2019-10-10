import React from 'react';
import { useSelector } from 'react-redux';
import { convertPopCountToCharge } from '../../utilities/convertPopCountToCharge';

const Balance = ({ className }: { className?: string }) => {
  const order = useSelector((state: any) => state.orderReducer.order);

  if (order.totalCount > 0) {
    return (
      <h4 className={'headerIcon'}> ${convertPopCountToCharge(order.totalCount, false)}</h4>
    );
  } else {
    return (
      null
    );
  }
};

export default Balance;
