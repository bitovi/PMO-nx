import { Controller, Get, Query } from '@nestjs/common';
import { PmoListOrderHistoryService } from './pmo-list-order-history.service';
import { OrderModel, PmoResponse } from '@common/models/common';

@Controller('orders-history')
export class PmoListOrderHistoryController {
  constructor(
    private readonly orderHistoryService: PmoListOrderHistoryService,
  ) {}

  @Get()
  getOrderHistory(@Query('email') email: string): PmoResponse<OrderModel[]> {
    return this.orderHistoryService.getOrderHistory(email);
  }
}
