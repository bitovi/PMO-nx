import { Module } from '@nestjs/common';
import { SysAdminListRestaurantsApiController } from './sys-admin-list-restaurants-api.controller';
import { SysAdminListRestaurantsApiService } from './sys-admin-list-restaurants-api.service';
import { CommonApiDbModule } from '@common/api/db';

@Module({
  controllers: [SysAdminListRestaurantsApiController],
  providers: [SysAdminListRestaurantsApiService],
  imports: [CommonApiDbModule],
  exports: [SysAdminListRestaurantsApiService],
})
export class SysAdminListRestaurantsApiModule {}
