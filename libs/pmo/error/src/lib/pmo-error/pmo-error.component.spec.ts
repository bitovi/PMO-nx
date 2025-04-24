import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PmoErrorComponent } from './pmo-error.component';

describe('PmoErrorComponent', () => {
  let component: PmoErrorComponent;
  let fixture: ComponentFixture<PmoErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PmoErrorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PmoErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
