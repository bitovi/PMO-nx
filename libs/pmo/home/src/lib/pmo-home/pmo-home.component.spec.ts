import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PmoHomeComponent } from './pmo-home.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

describe('PmoHomeComponent', () => {
  let component: PmoHomeComponent;
  let fixture: ComponentFixture<PmoHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PmoHomeComponent, MatCardModule, MatButtonModule, RouterModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {},
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PmoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
