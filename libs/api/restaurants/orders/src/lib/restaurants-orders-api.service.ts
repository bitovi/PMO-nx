import { OrderModel, PmoHttpStatus, PmoResponse } from '@common/models/common';
import { Injectable } from '@nestjs/common';
import { CommonApiDbService } from '@common/api/db';

@Injectable()
export class RestaurantsOrdersApiService {
  constructor(private dbService: CommonApiDbService) {}

  getOrders(restaurantId: string): PmoResponse<OrderModel[]> {
    const orders = this.dbService.getOrdersByRestaurantId(restaurantId);
    if (!orders) {
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
}
