import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RestaurantsAdminRestaurantOrdersComponent } from './restaurants-admin-restaurant-orders.component';
import { RestaurantsAdminOrdersService } from '../services/restaurants-admin-orders.service';
import { RestaurantsAdminOrdersStateService } from './restaurants-admin-restaurant-orders-state.service';
import { Router } from '@angular/router';
import { AuthStateService } from '@features/restaurants-admin/auth-state';
import { of } from 'rxjs';

describe('RestaurantsAdminRestaurantOrdersComponent', () => {
  let component: RestaurantsAdminRestaurantOrdersComponent;
  let fixture: ComponentFixture<RestaurantsAdminRestaurantOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestaurantsAdminRestaurantOrdersComponent],
      providers: [
        { provide: RestaurantsAdminOrdersService, useValue: {} },
        {
          provide: RestaurantsAdminOrdersStateService,
          useValue: { dispatch: jest.fn() },
        },
        { provide: Router, useValue: {} },
        {
          provide: AuthStateService,
          useValue: { connectedRestaurant$: of({ name: '' }) },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(
      RestaurantsAdminRestaurantOrdersComponent,
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
