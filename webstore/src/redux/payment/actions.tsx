import { COMPLETE_PURCHASE } from '../actionTypes';
import { PurchaseActionTypes } from './types';


export function completePurchase(): PurchaseActionTypes {
  return {
    type: COMPLETE_PURCHASE
  };
};
