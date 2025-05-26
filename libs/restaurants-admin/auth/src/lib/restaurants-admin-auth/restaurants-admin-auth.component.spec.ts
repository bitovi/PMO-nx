import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RestaurantsAdminAuthComponent } from './restaurants-admin-auth.component';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthStateService } from '@features/restaurants-admin/auth-state';
import { RestaurantsAuthService } from '../services/restaurants-auth.service';

describe('RestaurantsAdminAuthComponent', () => {
  let component: RestaurantsAdminAuthComponent;
  let fixture: ComponentFixture<RestaurantsAdminAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestaurantsAdminAuthComponent],
      providers: [
        { provide: RestaurantsAuthService, useValue: {} },
        { provide: MatSnackBar, useValue: {} },
        { provide: Router, useValue: {} },
        { provide: AuthStateService, useValue: {} },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RestaurantsAdminAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
