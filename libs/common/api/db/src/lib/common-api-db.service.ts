import { Injectable } from '@nestjs/common';
import { SysAdminModel } from '@common/models';

@Injectable()
export class CommonApiDbService {
  getSysAdminByName(name: string): SysAdminModel | undefined {
    throw new Error('Method not implemented.');
  }

  createSysAdmin(sysAdmin: SysAdminModel): SysAdminModel {
    throw new Error('Method not implemented.');
  }

  updateSysAdmin(
    name: string,
    updates: Partial<SysAdminModel>,
  ): SysAdminModel | undefined {
    throw new Error('Method not implemented.');
  }

  deleteSysAdmin(name: string): boolean {
    throw new Error('Method not implemented.');
  }
}
