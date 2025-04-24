import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SysAdminAuthComponent } from './sys-admin-auth.component';

describe('SysAdminAuthComponent', () => {
  let component: SysAdminAuthComponent;
  let fixture: ComponentFixture<SysAdminAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SysAdminAuthComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SysAdminAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
