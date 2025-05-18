import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SysAdminAddRestaurantComponent } from './sys-admin-add-restaurant.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { AddRestaurantService } from '../services/add-restaurant.service';

describe('SysAdminAddRestaurantComponent', () => {
  let component: SysAdminAddRestaurantComponent;
  let fixture: ComponentFixture<SysAdminAddRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SysAdminAddRestaurantComponent,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatDividerModule,
        MatExpansionModule,
        MatSnackBarModule,
      ],
      providers: [
        { provide: FormBuilder, useValue: new FormBuilder() },
        {
          provide: AddRestaurantService,
          useValue: {
            addRestaurant: jest.fn().mockReturnValue({ subscribe: jest.fn() }),
          },
        },
        {
          provide: Router,
          useValue: {
            navigate: jest.fn(),
          },
        },
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: {
              subscribe: jest.fn(),
            },
            snapshot: {
              paramMap: {
                get: jest.fn(),
              },
            },
          },
        },
        {
          provide: MatSnackBar,
          useValue: {
            open: jest.fn(),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SysAdminAddRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
