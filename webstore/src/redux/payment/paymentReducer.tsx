import { PurchaseState, PurchaseActionTypes } from './types';
import { COMPLETE_PURCHASE } from '../actionTypes';
import { PURCHASE_DEFAULT } from '../stateDefaults';

const initialState: PurchaseState = PURCHASE_DEFAULT;

export function paymentReducer(
  state = initialState,
  action: PurchaseActionTypes
): PurchaseState {
  switch (action.type) {
    case COMPLETE_PURCHASE:
      return {
        ...state,
        isComplete: true
      };
    default:
      return state;
  };
};
