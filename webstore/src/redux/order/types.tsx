import { UPDATE_ORDER, UPDATE_CHOICE, UPDATE_INIT } from '../actionTypes';

export interface OrderState {
  order: {
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
};

export interface ChoiceState {
  choice: string;
};

export interface InitState {
  init: boolean;
};

interface OrderPayload {
  pickedFlavor: string;
  numericChange: number;
};

interface ChoicePayload {
  choice: string;
};

interface InitPayload {
  init: boolean;
};

interface UpdateOrderAction {
  type: typeof UPDATE_ORDER;
  payload: OrderPayload;
};

interface UpdateChoiceAction {
  type: typeof UPDATE_CHOICE;
  payload: ChoicePayload;
};

interface UpdateInitAction {
  type: typeof UPDATE_INIT;
  payload: InitPayload;
};

export type OrderActionTypes = UpdateOrderAction;
export type ChoiceActionTypes = UpdateChoiceAction;
export type InitActionTypes = UpdateInitAction;
