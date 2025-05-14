import { Test } from '@nestjs/testing';
import { SysAdminAuthApiService } from './sys-admin-auth-api.service';
import { CommonApiDbService } from '@common/api/db';

describe('SysAdminAuthApiService', () => {
  let service: SysAdminAuthApiService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [SysAdminAuthApiService, CommonApiDbService],
    }).compile();

    service = module.get(SysAdminAuthApiService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
