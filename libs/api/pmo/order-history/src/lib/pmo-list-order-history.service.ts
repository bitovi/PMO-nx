import { Injectable } from '@nestjs/common';
import { CommonApiDbService } from '@common/api/db';
import { OrderModel, PmoHttpStatus, PmoResponse } from '@common/models/common';

@Injectable()
export class PmoListOrderHistoryService {
  constructor(private readonly dbService: CommonApiDbService) {}

  getOrderHistory(email: string): PmoResponse<OrderModel[]> {
    // If no email provided, return an empty array
    if (!email) {
      return {
        status: PmoHttpStatus.OK,
        message: 'No user email provided',
        data: [],
      };
    }

    // Get all orders
    const allOrders = this.dbService.getAllOrders();

    // Filter orders by customer email
    const userOrders = allOrders.filter(
      (order) => order.customer.email.toLowerCase() === email.toLowerCase(),
    );

    return {
      status: PmoHttpStatus.OK,
      message: userOrders.length
        ? 'Order history found'
        : 'No orders found for this user',
      data: userOrders,
    };
  }
}
