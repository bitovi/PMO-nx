import { CustomerModel } from './customer.model';

export const OrderStatus = {
  PENDING: 'PENDING',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  DELIVERED: 'DELIVERED',
  CANCELLED: 'CANCELLED',
  REFUNDED: 'REFUNDED',
  RETURNED: 'RETURNED',
} as const;

export interface OrderModel {
  id: string;
  restaurantId: string;
  customer: CustomerModel;
  status: (typeof OrderStatus)[keyof typeof OrderStatus];
  items: {
    id: string;
    name: string;
    quantity: number;
    price: number;
  }[];
  totalPrice: number;
}
