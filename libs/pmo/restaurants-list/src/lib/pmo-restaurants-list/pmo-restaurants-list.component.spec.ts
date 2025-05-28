import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PmoRestaurantsListComponent } from './pmo-restaurants-list.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterLink } from '@angular/router';
import { RestaurantsService } from '../services/restaurants.service';
import { of } from 'rxjs';

describe('PmoRestaurantsListComponent', () => {
  let component: PmoRestaurantsListComponent;
  let fixture: ComponentFixture<PmoRestaurantsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        PmoRestaurantsListComponent,
        CommonModule,
        MatCardModule,
        MatButtonModule,
        MatProgressSpinnerModule,
        MatChipsModule,
        MatIconModule,
        MatDividerModule,
        RouterLink,
      ],
      providers: [
        {
          provide: RestaurantsService,
          useValue: {
            getRestaurants: jest.fn().mockReturnValue(of({})),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PmoRestaurantsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
