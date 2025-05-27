import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PmoMainLayoutComponent } from './pmo-main-layout.component';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

describe('PmoMainLayoutComponent', () => {
  let component: PmoMainLayoutComponent;
  let fixture: ComponentFixture<PmoMainLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PmoMainLayoutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PmoMainLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
