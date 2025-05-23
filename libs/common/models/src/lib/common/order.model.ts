export const OrderStatus = {
  PENDING: 'PENDING',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED',
  REFUNDED: 'REFUNDED',
  DELIVERED: 'DELIVERED',
  RETURNED: 'RETURNED',
} as const;

export interface OrderModel {
  id: string;
  restaurantId: string;
  status: (typeof OrderStatus)[keyof typeof OrderStatus];
  items: {
    id: string;
    name: string;
    quantity: number;
    price: number;
  }[];
  totalPrice: number;
}
