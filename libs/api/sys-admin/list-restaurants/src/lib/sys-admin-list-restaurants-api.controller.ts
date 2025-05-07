import { Controller } from '@nestjs/common';
import { SysAdminListRestaurantsApiService } from './sys-admin-list-restaurants-api.service';

@Controller('sys-admin-list-restaurants-api')
export class SysAdminListRestaurantsApiController {
  constructor(
    private sysAdminListRestaurantsApiService: SysAdminListRestaurantsApiService,
  ) {}
}
