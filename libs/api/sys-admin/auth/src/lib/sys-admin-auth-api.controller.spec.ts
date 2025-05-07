import { Test } from '@nestjs/testing';
import { SysAdminAuthApiController } from './sys-admin-auth-api.controller';
import { SysAdminAuthApiService } from './sys-admin-auth-api.service';

describe('SysAdminAuthApiController', () => {
  let controller: SysAdminAuthApiController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [SysAdminAuthApiService],
      controllers: [SysAdminAuthApiController],
    }).compile();

    controller = module.get(SysAdminAuthApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
