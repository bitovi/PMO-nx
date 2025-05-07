import { Test } from '@nestjs/testing';
import { SysAdminEditRestaurantApiService } from './sys-admin-edit-restaurant-api.service';

describe('SysAdminEditRestaurantApiService', () => {
  let service: SysAdminEditRestaurantApiService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [SysAdminEditRestaurantApiService],
    }).compile();

    service = module.get(SysAdminEditRestaurantApiService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
