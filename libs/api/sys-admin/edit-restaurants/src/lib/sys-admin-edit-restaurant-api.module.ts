import { Module } from '@nestjs/common';
import { SysAdminEditRestaurantApiController } from './sys-admin-edit-restaurant-api.controller';
import { SysAdminEditRestaurantApiService } from './sys-admin-edit-restaurant-api.service';

@Module({
  controllers: [SysAdminEditRestaurantApiController],
  providers: [SysAdminEditRestaurantApiService],
  exports: [SysAdminEditRestaurantApiService],
})
export class SysAdminEditRestaurantApiModule {}
