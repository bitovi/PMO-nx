import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RestaurantsAdminRestaurantOrdersComponent } from './restaurants-admin-restaurant-orders.component';

describe('RestaurantsAdminRestaurantOrdersComponent', () => {
  let component: RestaurantsAdminRestaurantOrdersComponent;
  let fixture: ComponentFixture<RestaurantsAdminRestaurantOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestaurantsAdminRestaurantOrdersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      RestaurantsAdminRestaurantOrdersComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
