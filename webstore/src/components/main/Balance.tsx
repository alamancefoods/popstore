import React from 'react';
import { useSelector } from 'react-redux';
import { convertPopCountToCharge } from '../../utilities/convertPopCountToCharge';
import { StyledBalance } from '../../styles/root/RootStyles';

const Balance = ({ className }: { className?: string }) => {
  const order = useSelector((state: any) => state.orderReducer.order);

  if (order.totalCount > 0) {
    return (
      <StyledBalance> ${convertPopCountToCharge(order.totalCount, false)}</StyledBalance>
    );
  } else {
    return (
      null
    );
  }
};

export default Balance;
