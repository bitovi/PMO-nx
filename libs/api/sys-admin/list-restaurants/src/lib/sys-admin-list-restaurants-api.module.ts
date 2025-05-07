import { Module } from '@nestjs/common';
import { SysAdminListRestaurantsApiController } from './sys-admin-list-restaurants-api.controller';
import { SysAdminListRestaurantsApiService } from './sys-admin-list-restaurants-api.service';

@Module({
  controllers: [SysAdminListRestaurantsApiController],
  providers: [SysAdminListRestaurantsApiService],
  exports: [SysAdminListRestaurantsApiService],
})
export class SysAdminListRestaurantsApiModule {}
