import { COMPLETE_PURCHASE } from '../actionTypes';

export interface PurchaseState {
  isComplete: boolean;
};

interface UpdatePurchaseAction {
  type: typeof COMPLETE_PURCHASE;
};

export type PurchaseActionTypes = UpdatePurchaseAction;

