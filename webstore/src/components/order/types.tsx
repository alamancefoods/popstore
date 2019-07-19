export interface OrderInterface {
  balance: number;
  totalCount: number;
  grapeCount: number;
  orangeCount: number;
  bluePunchCount: number;
  lemonLimeCount: number;
  pinaColadaCount: number;
  bananaCount: number;
  peachCount: number;
  cherryCount: number;
  mangoCount: number;
  greenAppleCount: number;
  watermelonCount: number;
  strawberryCount: number;
  guavaCount: number
  mojitoCount: number;
  papayaCount: number;
  [index: string]: number;
}

export interface OrderEntryProps {
  popFlavor: string;
  updateOrder: (popCount: number, popFlavor: string) => void;
  removePopFromOrder: (popFlavor: string) => void;
  popCount: number;
}

export interface OrderFormProps {
  toggleCheckout: () => void;
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
