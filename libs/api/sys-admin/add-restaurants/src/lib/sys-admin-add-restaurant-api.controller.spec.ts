import { Test } from '@nestjs/testing';
import { SysAdminAddRestaurantApiController } from './sys-admin-add-restaurant-api.controller';
import { SysAdminAddRestaurantApiService } from './sys-admin-add-restaurant-api.service';

describe('SysAdminAddRestaurantApiController', () => {
  let controller: SysAdminAddRestaurantApiController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [SysAdminAddRestaurantApiService],
      controllers: [SysAdminAddRestaurantApiController],
    }).compile();

    controller = module.get(SysAdminAddRestaurantApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
