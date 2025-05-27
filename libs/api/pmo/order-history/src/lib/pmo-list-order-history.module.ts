import { Module } from '@nestjs/common';
import { PmoListOrderHistoryService } from './pmo-list-order-history.service';
import { PmoListOrderHistoryController } from './pmo-list-order-history.controller';
import { CommonApiDbModule } from '@common/api/db';

@Module({
  imports: [CommonApiDbModule],
  controllers: [PmoListOrderHistoryController],
  providers: [PmoListOrderHistoryService],
  exports: [PmoListOrderHistoryService],
})
export class PmoListOrderHistoryModule {}
