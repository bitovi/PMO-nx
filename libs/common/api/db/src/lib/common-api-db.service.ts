import { Injectable } from '@nestjs/common';
import { SysAdminModel } from '@common/models';
import * as sysAdminsMocks from './mocks/sys-admins.json';

@Injectable()
export class CommonApiDbService {
  private sysAdmins: SysAdminModel[] = [...sysAdminsMocks];

  getSysAdminByName(name: string): SysAdminModel | undefined {
    return this.sysAdmins.find((admin) => admin.name === name);
  }

  createSysAdmin(sysAdmin: SysAdminModel): SysAdminModel {
    this.sysAdmins.push(sysAdmin);
    return sysAdmin;
  }

  updateSysAdmin(
    name: string,
    updates: Partial<SysAdminModel>,
  ): SysAdminModel | undefined {
    const index = this.sysAdmins.findIndex((admin) => admin.name === name);
    if (index === -1) return undefined;

    this.sysAdmins[index] = { ...this.sysAdmins[index], ...updates };
    return this.sysAdmins[index];
  }

  deleteSysAdmin(name: string): boolean {
    const initialLength = this.sysAdmins.length;
    this.sysAdmins = this.sysAdmins.filter((admin) => admin.name !== name);
    return this.sysAdmins.length !== initialLength;
  }
}
