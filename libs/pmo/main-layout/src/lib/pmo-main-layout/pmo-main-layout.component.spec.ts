import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PmoMainLayoutComponent } from './pmo-main-layout.component';
import { CommonModule } from '@angular/common';
import {
  RouterModule,
  RouterLinkActive,
  RouterOutlet,
  ActivatedRoute,
} from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';

describe('PmoMainLayoutComponent', () => {
  let component: PmoMainLayoutComponent;
  let fixture: ComponentFixture<PmoMainLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        PmoMainLayoutComponent,
        CommonModule,
        RouterOutlet,
        RouterLinkActive,
        RouterModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {},
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PmoMainLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
