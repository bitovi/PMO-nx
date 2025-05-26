import { OrderModel, PmoHttpStatus, PmoResponse } from '@common/models/common';
import { Injectable } from '@nestjs/common';
import { CommonApiDbService } from '@common/api/db';
import { OrdersByRestaurantsResponse } from '@common/models/restaurants/orders';

@Injectable()
export class RestaurantsOrdersApiService {
  constructor(private dbService: CommonApiDbService) {}

  getOrders(restaurantId: string): PmoResponse<OrdersByRestaurantsResponse[]> {
    const orders = this.dbService.getOrdersByRestaurantId(restaurantId);
    if (orders.length === 0) {
      return {
        status: PmoHttpStatus.NOT_FOUND,
        message: 'No orders found for this restaurant',
        data: [],
      };
    }
    return {
      status: PmoHttpStatus.OK,
      message: 'Orders found',
      data: orders,
    };
  }

  updateOrderStatus(
    orderId: string,
    newStatus: OrderModel['status'],
  ): PmoResponse<OrdersByRestaurantsResponse | null> {
    const order = this.dbService.updateOrderStatus(orderId, newStatus);

    if (!order) {
      return {
        status: PmoHttpStatus.NOT_FOUND,
        message: 'Order not found',
        error: 'Order with the given ID does not exist',
        data: null,
      };
    }
    return {
      status: PmoHttpStatus.OK,
      message: 'Order status updated successfully',
      data: order,
    };
  }
}
