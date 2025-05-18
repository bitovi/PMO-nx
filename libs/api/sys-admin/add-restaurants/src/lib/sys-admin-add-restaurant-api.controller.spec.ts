import { Test } from '@nestjs/testing';
import { SysAdminAddRestaurantApiController } from './sys-admin-add-restaurant-api.controller';
import { SysAdminAddRestaurantApiService } from './sys-admin-add-restaurant-api.service';
import { CommonApiDbModule } from '@common/api/db';

describe('SysAdminAddRestaurantApiController', () => {
  let controller: SysAdminAddRestaurantApiController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [SysAdminAddRestaurantApiService],
      controllers: [SysAdminAddRestaurantApiController],
      imports: [CommonApiDbModule],
    }).compile();

    controller = module.get(SysAdminAddRestaurantApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
