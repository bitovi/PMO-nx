import { Module } from '@nestjs/common';
import { PmoListOrderHistoryService } from './pmo-list-order-history.service';

@Module({
  controllers: [],
  providers: [PmoListOrderHistoryService],
  exports: [PmoListOrderHistoryService],
})
export class PmoListOrderHistoryModule {}
