import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SysAdminListRestaurantsComponent } from './sys-admin-list-restaurants.component';

describe('SysAdminListRestaurantsComponent', () => {
  let component: SysAdminListRestaurantsComponent;
  let fixture: ComponentFixture<SysAdminListRestaurantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SysAdminListRestaurantsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SysAdminListRestaurantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
