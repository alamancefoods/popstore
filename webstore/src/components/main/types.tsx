import { OrderInterface } from '../order/types'

export interface BalanceInterface {
  convertPopCountToCharge: (popCount: number, isCents: boolean) => React.ReactText;
  order: OrderInterface;
}
