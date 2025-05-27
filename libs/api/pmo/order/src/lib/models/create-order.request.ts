import { CustomerModel } from '@common/models/common';

export interface CreateOrderRequest {
  restaurantId: string;
  customer: CustomerModel;
  items: {
    id: string;
    name: string;
    quantity: number;
    price: number;
  }[];
}
