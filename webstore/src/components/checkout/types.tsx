import { OrderInterface } from '../order/types'


export interface CheckoutFormProps {
  stripe?: any;
  toggleCheckout: () => void;
  order: OrderInterface;
  completePurchase: () => void;
  className: string;
}

export interface CheckoutEntryValueTypes {
  email: string;
  name: string;
  city: string;
  country: string;
  state: string;
  addressLineOne: string;
  addressLineTwo: string;
  postalCode: string;
}

export interface CheckoutSubmitFunctionType {
  email: string,
  city: string,
  country: string,
  state: string,
  addressLineOne: string,
  addressLineTwo: string,
  postalCode: string
}


