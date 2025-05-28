import { Injectable } from '@nestjs/common';
import { CommonApiDbService } from '@common/api/db';
import {
  OrderModel,
  OrderStatus,
  PmoHttpStatus,
  PmoResponse,
} from '@common/models/common';
import { PmoCreateOrderRequest } from '@common/models/pmo/orders';

@Injectable()
export class PmoListOrderService {
  constructor(private dbService: CommonApiDbService) {}

  addOrder(
    orderRequest: PmoCreateOrderRequest,
  ): PmoResponse<OrderModel | null> {
    try {
      const newOrder = this.dbService.addOrder({
        ...orderRequest,
        status: OrderStatus.PENDING,
        totalPrice: this.calculateTotalPrice(orderRequest.items),
      });

      return {
        status: PmoHttpStatus.OK,
        message: 'Order created successfully',
        data: newOrder,
      };
    } catch (error) {
      return {
        status: PmoHttpStatus.INTERNAL_SERVER_ERROR,
        message: 'Failed to create order',
        data: null,
      };
    }
  }

  private calculateTotalPrice(
    items: { quantity: number; price: number }[],
  ): number {
    return items.reduce((total, item) => total + item.quantity * item.price, 0);
  }
}
