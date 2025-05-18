import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { SysAdminListRestaurantsComponent } from './sys-admin-list-restaurants.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { ListRestaurantsService } from '../services/list-restaurants.service';
import { of } from 'rxjs';

describe('SysAdminListRestaurantsComponent', () => {
  let component: SysAdminListRestaurantsComponent;
  let fixture: ComponentFixture<SysAdminListRestaurantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SysAdminListRestaurantsComponent,
        MatTableModule,
        MatButtonModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatSnackBarModule,
      ],
      providers: [
        {
          provide: ListRestaurantsService,
          useValue: {
            getRestaurants: jest.fn().mockReturnValue(of([])), // Changed to return an Observable
            deleteRestaurant: jest.fn().mockReturnValue(of({})), // Also updated deleteRestaurant for consistency
          },
        },
        ...provideHttpClientTesting(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SysAdminListRestaurantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
