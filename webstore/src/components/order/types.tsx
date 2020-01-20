export interface OrderInterface {
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
  guava: number
  mojito: number;
  papaya: number;
  [index: string]: number;
}

interface animationStyle {
  mod?: any;
};

export interface PopButtonProps {
  style?: animationStyle;
  popButton: any;
  mod: any;
}

export interface AnimProps {
  mod: any;
}

export interface OrderFormProps {
  addPopToOrder: (popFlavor: string) => void;
  updateOrder: (numericChange: number, popFlavor: string) => void;
  removePopFromOrder: (popFlavor: string) => void;
  convertPopCountToCharge: (popCount: number, isCents: boolean) => React.ReactText;
  order: OrderInterface;
  pickedPop: string;
  buttonList: string[];
  className?: string;
}


export interface OrderEntryValueTypes {
  popCount: "";
}
