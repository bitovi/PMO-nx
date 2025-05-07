import { Test } from '@nestjs/testing';
import { SysAdminAddRestaurantApiService } from './sys-admin-add-restaurant-api.service';

describe('SysAdminAddRestaurantApiService', () => {
  let service: SysAdminAddRestaurantApiService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [SysAdminAddRestaurantApiService],
    }).compile();

    service = module.get(SysAdminAddRestaurantApiService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
