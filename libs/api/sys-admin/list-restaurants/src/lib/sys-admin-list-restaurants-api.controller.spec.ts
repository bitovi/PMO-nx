import { Test } from '@nestjs/testing';
import { SysAdminListRestaurantsApiController } from './sys-admin-list-restaurants-api.controller';
import { SysAdminListRestaurantsApiService } from './sys-admin-list-restaurants-api.service';

describe('SysAdminListRestaurantsApiController', () => {
  let controller: SysAdminListRestaurantsApiController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [SysAdminListRestaurantsApiService],
      controllers: [SysAdminListRestaurantsApiController],
    }).compile();

    controller = module.get(SysAdminListRestaurantsApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
