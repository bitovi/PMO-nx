import { HttpException, Injectable } from '@nestjs/common';
import { CommonApiDbService } from '@common/api/db';
import { HttpStatus } from '@nestjs/common';
import { PmoHttpStatus, PmoResponse } from '@common/models/common';
import { SysAdminAuthLoginResponse } from '@common/models/sys-admin/auth';

@Injectable()
export class SysAdminAuthApiService {
  constructor(private _dbService: CommonApiDbService) {}

  login(name: string): PmoResponse<SysAdminAuthLoginResponse> {
    const sysAdmin = this._dbService.getSysAdminByNameOrEmail(name);

    if (!sysAdmin) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    return {
      status: PmoHttpStatus.OK,
      data: sysAdmin,
      message: 'Login successful',
    };
  }
}
