export interface OrderState {
  balance: number;
  totalCount: number;
  grape: number;
  orange: number;
  bluePunch: number;
  lemonLime: number;
  pineapple: number;
  banana: number;
  coconut: number;
  cherry: number;
  mango: number;
  greenApple: number;
  watermelon: number;
  strawberry: number;
  guava: number;
  mojito: number;
  papaya: number;
};

export interface choiceState {
  choice: string;
};

interface OrderPayload {
  pickedFlavor: string;
  numericChange: number;
};

interface ChoicePayload {
  pickedFlavor: string;
};

interface UpdateOrderAction {
  type: typeof UPDATE_ORDER;
  payload: OrderPayload;
};

interface UpdateChoiceAction {
  type: typeof UPDATE_CHOICE;
  payload: ChoicePayload;
};

export type OrderActionTypes = UpdateOrderAction;
export type ChoiceActionTypes = UpdateChoiceAction;

