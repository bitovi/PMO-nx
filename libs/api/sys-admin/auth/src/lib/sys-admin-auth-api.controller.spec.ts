import { Test } from '@nestjs/testing';
import { SysAdminAuthApiController } from './sys-admin-auth-api.controller';
import { SysAdminAuthApiService } from './sys-admin-auth-api.service';
import { CommonApiDbModule, CommonApiDbService } from '@common/api/db';

describe('SysAdminAuthApiController', () => {
  let controller: SysAdminAuthApiController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [SysAdminAuthApiService, CommonApiDbService],
      controllers: [SysAdminAuthApiController],
    }).compile();

    controller = module.get(SysAdminAuthApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
