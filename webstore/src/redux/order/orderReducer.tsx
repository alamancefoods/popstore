import {
  OrderState,
  OrderActionTypes,
  UPDATE_ORDER
} from './types';

const initialState: OrderState = {
  balance: 0,
  totalCount: 0,
  grape: 0,
  orange: 0,
  bluePunch: 0,
  lemonLime: 0,
  pineapple: 0,
  banana: 0,
  coconut: 0,
  cherry: 0,
  mango: 0,
  greenApple: 0,
  watermelon: 0,
  strawberry: 0,
  guava: 0,
  mojito: 0,
  papaya: 0
};

function calculatedTotal = (
  currentTotal: number,
  numericChange: number,
  initialCount: number
) {
  const changeDifference: number = numericChange - initialCount;
  const newTotal: number = currentTotal + changeDifference;
  return newTotal;
};

function calculatedBalance = (newTotal: number) {
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
        state['totalCount'],
        action.payload.numericChange,
        state[action.payload.pickedFlavor]
      );
      const newBalance = calculatedBalance(newTotal);
      return {
        ...state,
        [action.payload.pickedFlavor]: action.payload.numericChange,
        balance: newBalance,
        totalCount: newTotal
      };
    default:
      return state;
  }
}


