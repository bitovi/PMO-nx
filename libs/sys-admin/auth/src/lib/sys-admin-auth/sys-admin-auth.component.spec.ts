import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SysAdminAuthComponent } from './sys-admin-auth.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { SysAdminAuthService } from '../service/sys-admin-auth.service';

describe('SysAdminAuthComponent', () => {
  let component: SysAdminAuthComponent;
  let fixture: ComponentFixture<SysAdminAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SysAdminAuthComponent],
      providers: [
        {
          provide: SysAdminAuthService,
          useValue: {},
        },
        {
          provide: MatSnackBar,
          useValue: {},
        },
        {
          provide: Router,
          useValue: {},
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SysAdminAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
