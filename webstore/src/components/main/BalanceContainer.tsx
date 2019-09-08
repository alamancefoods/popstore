import React from 'react';
import {BalanceInterface} from './types'
import { TOTAL_POPS } from '../../constants/constants';

const BalanceContainer = (
  {
    convertPopCountToCharge,
    order
  }: BalanceInterface) => {



    if(order[TOTAL_POPS] > 0){
      return (
        <>
          Balance: ${convertPopCountToCharge(order[TOTAL_POPS], false)}
        </>
      );
    }else{
      return(
        null
      )
    }
  }

export default BalanceContainer;
