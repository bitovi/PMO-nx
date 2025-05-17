import { Body, Controller, Get, Post } from '@nestjs/common';
import { SysAdminAuthApiService } from './sys-admin-auth-api.service';

@Controller('sys-admin/auth')
export class SysAdminAuthApiController {
  constructor(private sysAdminAuthApiService: SysAdminAuthApiService) {}

  @Post('login')
  login(@Body() { name }: { name: string }) {
    return this.sysAdminAuthApiService.login(name);
  }
}
