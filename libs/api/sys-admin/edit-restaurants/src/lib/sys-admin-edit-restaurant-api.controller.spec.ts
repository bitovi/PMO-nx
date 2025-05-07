import { Test } from '@nestjs/testing';
import { SysAdminEditRestaurantApiController } from './sys-admin-edit-restaurant-api.controller';
import { SysAdminEditRestaurantApiService } from './sys-admin-edit-restaurant-api.service';

describe('SysAdminEditRestaurantApiController', () => {
  let controller: SysAdminEditRestaurantApiController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [SysAdminEditRestaurantApiService],
      controllers: [SysAdminEditRestaurantApiController],
    }).compile();

    controller = module.get(SysAdminEditRestaurantApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
