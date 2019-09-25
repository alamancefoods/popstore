import { OrderState, OrderActionTypes } from './types';
import { ORDER_DEFAULT } from '../stateDefaults';
import { UPDATE_ORDER } from '../actionTypes';


const initialState: OrderState = ORDER_DEFAULT;

function calculatedTotal(
  currentTotal: number,
  numericChange: number,
  initialCount: number
) {
  const changeDifference: number = numericChange - initialCount;
  const newTotal: number = currentTotal + changeDifference;
  return newTotal;
};

function calculatedBalance(newTotal: number) {
  let newBalance: number;
  if (newTotal > 10) {
    newBalance = newTotal * 25;
  } else {
    newBalance = newTotal * 10;
  }
  return newBalance;
};

export function orderReducer(
  state = initialState,
  action: OrderActionTypes
): OrderState {
  switch (action.type) {
    case UPDATE_ORDER:
      const newTotal = calculatedTotal(
        state.order['totalCount'],
        action.payload.numericChange,
        (state as any).order[action.payload.pickedFlavor]
      );
      const newBalance = calculatedBalance(newTotal);
      return {
        order: {
          ...state.order,
          [action.payload.pickedFlavor]: action.payload.numericChange,
          balance: newBalance,
          totalCount: newTotal
        }
      };
    default:
      return state;
  }
}


