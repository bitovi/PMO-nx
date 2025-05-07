import { Controller } from '@nestjs/common';
import { SysAdminAddRestaurantApiService } from './sys-admin-add-restaurant-api.service';

@Controller('sys-admin-add-restaurant-api')
export class SysAdminAddRestaurantApiController {
  constructor(
    private sysAdminAddRestaurantApiService: SysAdminAddRestaurantApiService,
  ) {}
}
