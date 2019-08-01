export interface OrderInterface {
  balance: number;
  totalCount: number;
  grape: number;
  orange: number;
  bluePunch: number;
  lemonLime: number;
  pinaColada: number;
  banana: number;
  peach: number;
  cherry: number;
  mango: number;
  greenApple: number;
  watermelon: number;
  strawberry: number;
  guava: number
  mojito: number;
  papaya: number;
  [index: string]: number;
}

export interface OrderEntryProps {
  popFlavor: string;
  updateOrder: (popCount: number, popFlavor: string) => void;
  removePopFromOrder: (popFlavor: string) => void;
  popCount: number;
  order: OrderInterface;
}

export interface OrderFormProps {
  addPopToOrder: (popFlavor: string) => void;
  updateOrder: (numericChange: number, popFlavor: string) => void;
  removePopFromOrder: (popFlavor: string) => void;
  convertPopCountToCharge: (popCount: number, isCents: boolean) => React.ReactText;
  order: OrderInterface;
  pickedPopList: string[];
  buttonList: string[];
  className?: string;
}

export interface OrderEntryValueTypes {
  popCount: number;
}
