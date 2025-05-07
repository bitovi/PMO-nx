import { HttpException, Injectable } from '@nestjs/common';
import { CommonApiDbService } from '@common/api/db';
import { HttpStatus } from '@nestjs/common';
import { PmoResponse, SysAdminAuthLoginResponse } from '@common/models';

@Injectable()
export class SysAdminAuthApiService {
  constructor(private _dbService: CommonApiDbService) {}

  login(name: string): PmoResponse<SysAdminAuthLoginResponse> {
    const sysAdmin = this._dbService.getSysAdminByName(name);

    if (!sysAdmin) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    return {
      status: HttpStatus.OK,
      data: sysAdmin,
      message: 'Login successful',
    };
  }
}
