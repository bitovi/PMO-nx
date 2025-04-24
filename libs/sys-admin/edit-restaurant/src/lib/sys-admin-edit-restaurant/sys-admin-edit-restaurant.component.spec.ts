import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SysAdminEditRestaurantComponent } from './sys-admin-edit-restaurant.component';

describe('SysAdminEditRestaurantComponent', () => {
  let component: SysAdminEditRestaurantComponent;
  let fixture: ComponentFixture<SysAdminEditRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SysAdminEditRestaurantComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SysAdminEditRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
