import { OrderActionTypes, ChoiceActionTypes } from './types';
import { UPDATE_ORDER, UPDATE_CHOICE } from '../actionTypes';

export function updateOrder(
  pickedFlavor: string,
  numericChange: number
): OrderActionTypes {
  return {
    type: UPDATE_ORDER,
    payload: {
      pickedFlavor: pickedFlavor,
      numericChange: numericChange
    }
  };
};


export function updateChoice(
  choice: string
): ChoiceActionTypes {
  return {
    type: UPDATE_CHOICE,
    payload: {
      choice: choice
    }
  };
};

