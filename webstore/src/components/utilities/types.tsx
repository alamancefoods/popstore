import { OrderInterface } from '../order/types';
import { StyledComponent } from 'styled-components'

export interface ProtectedCheckoutRouteProps {
  toggleCheckout: () => void;
  order: OrderInterface;
  completePurchase: () => void;
}
