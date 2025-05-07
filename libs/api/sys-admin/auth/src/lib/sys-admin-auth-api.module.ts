import { Module } from '@nestjs/common';
import { SysAdminAuthApiController } from './sys-admin-auth-api.controller';
import { SysAdminAuthApiService } from './sys-admin-auth-api.service';

@Module({
  controllers: [SysAdminAuthApiController],
  providers: [SysAdminAuthApiService],
  exports: [SysAdminAuthApiService],
})
export class SysAdminAuthApiModule {}
