import { Test } from '@nestjs/testing';
import { SysAdminAddRestaurantApiService } from './sys-admin-add-restaurant-api.service';
import { CommonApiDbModule } from '@common/api/db';

describe('SysAdminAddRestaurantApiService', () => {
  let service: SysAdminAddRestaurantApiService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [SysAdminAddRestaurantApiService],
      imports: [CommonApiDbModule],
    }).compile();

    service = module.get(SysAdminAddRestaurantApiService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
