import { Module } from '@nestjs/common';
import { CommonApiDbService } from './common-api-db.service';

@Module({
  controllers: [],
  providers: [CommonApiDbService],
  exports: [CommonApiDbService],
})
export class CommonApiDbModule {}
