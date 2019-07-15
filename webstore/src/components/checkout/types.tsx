import { OrderInterface } from '../order/types'


export interface CheckoutFormProps {
  stripe?: any;
  toggleCheckout: () => void;
  order: OrderInterface;
}
