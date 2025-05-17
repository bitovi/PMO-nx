import { Injectable } from '@nestjs/common';
import { SysAdminModel } from '@common/models/common';
import { SysAdminsMocks } from './mocks/sys-admins';

@Injectable()
export class CommonApiDbService {
  private sysAdmins: SysAdminModel[] = SysAdminsMocks;

  getSysAdminByNameOrEmail(name: string): SysAdminModel | undefined {
    return this.sysAdmins.find(
      (sysAdmin) => sysAdmin.name === name || sysAdmin.email === name,
    );
  }
}
