import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SysAdminAddRestaurantComponent } from './sys-admin-add-restaurant.component';

describe('SysAdminAddRestaurantComponent', () => {
  let component: SysAdminAddRestaurantComponent;
  let fixture: ComponentFixture<SysAdminAddRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SysAdminAddRestaurantComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SysAdminAddRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
