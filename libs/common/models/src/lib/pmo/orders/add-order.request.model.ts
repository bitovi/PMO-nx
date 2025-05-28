import { CustomerModel } from '../../common/customer.model';

export interface PmoCreateOrderRequest {
  restaurantId: string;
  customer: CustomerModel;
  items: {
    id: string;
    name: string;
    quantity: number;
    price: number;
  }[];
}
