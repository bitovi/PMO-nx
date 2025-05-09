import { Module } from '@nestjs/common';
import { SysAdminAuthApiController } from './sys-admin-auth-api.controller';
import { SysAdminAuthApiService } from './sys-admin-auth-api.service';
import { CommonApiDbModule } from '@common/api/db';

@Module({
  controllers: [SysAdminAuthApiController],
  providers: [SysAdminAuthApiService],
  imports: [CommonApiDbModule],
  exports: [SysAdminAuthApiService],
})
export class SysAdminAuthApiModule {}
