import { OrderActionTypes, ChoiceActionTypes, InitActionTypes } from './types';
import { UPDATE_ORDER, UPDATE_CHOICE, UPDATE_INIT } from '../actionTypes';

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

export function updateInit(): InitActionTypes {
  return {
    type: UPDATE_INIT,
    payload: {
      init: true
    }
  };
};
