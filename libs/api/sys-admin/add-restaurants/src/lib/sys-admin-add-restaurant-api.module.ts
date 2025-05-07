import { Module } from '@nestjs/common';
import { SysAdminAddRestaurantApiController } from './sys-admin-add-restaurant-api.controller';
import { SysAdminAddRestaurantApiService } from './sys-admin-add-restaurant-api.service';

@Module({
  controllers: [SysAdminAddRestaurantApiController],
  providers: [SysAdminAddRestaurantApiService],
  exports: [SysAdminAddRestaurantApiService],
})
export class SysAdminAddRestaurantApiModule {}
