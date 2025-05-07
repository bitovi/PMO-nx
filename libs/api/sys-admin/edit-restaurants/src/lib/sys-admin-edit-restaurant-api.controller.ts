import { Controller } from '@nestjs/common';
import { SysAdminEditRestaurantApiService } from './sys-admin-edit-restaurant-api.service';

@Controller('sys-admin-edit-restaurant-api')
export class SysAdminEditRestaurantApiController {
  constructor(
    private sysAdminEditRestaurantApiService: SysAdminEditRestaurantApiService,
  ) {}
}
