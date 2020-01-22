import React from 'react';
import { useSelector } from 'react-redux';
import { convertPopCountToCharge } from '../../utilities/convertPopCountToCharge';
import { StyledBalance } from '../../styles/root/RootStyles';

const Balance = ({ className }: { className?: string }) => {
  const order = useSelector((state: any) => state.orderReducer.order);

  return (
    <StyledBalance> Total: ${convertPopCountToCharge(order.totalCount, false)}</StyledBalance>
  );
};

export default Balance;
