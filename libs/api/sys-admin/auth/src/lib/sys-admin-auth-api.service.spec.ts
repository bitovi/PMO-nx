import { Test } from '@nestjs/testing';
import { SysAdminAuthApiService } from './sys-admin-auth-api.service';

describe('SysAdminAuthApiService', () => {
  let service: SysAdminAuthApiService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [SysAdminAuthApiService],
    }).compile();

    service = module.get(SysAdminAuthApiService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
