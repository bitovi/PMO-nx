import { Test } from '@nestjs/testing';
import { SysAdminListRestaurantsApiService } from './sys-admin-list-restaurants-api.service';
import { CommonApiDbModule } from '@common/api/db';

describe('SysAdminListRestaurantsApiService', () => {
  let service: SysAdminListRestaurantsApiService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [SysAdminListRestaurantsApiService],
      imports: [CommonApiDbModule],
    }).compile();

    service = module.get(SysAdminListRestaurantsApiService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
