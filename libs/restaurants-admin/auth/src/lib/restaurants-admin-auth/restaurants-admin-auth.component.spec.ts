import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RestaurantsAdminAuthComponent } from './restaurants-admin-auth.component';

describe('RestaurantsAdminAuthComponent', () => {
  let component: RestaurantsAdminAuthComponent;
  let fixture: ComponentFixture<RestaurantsAdminAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestaurantsAdminAuthComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RestaurantsAdminAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
