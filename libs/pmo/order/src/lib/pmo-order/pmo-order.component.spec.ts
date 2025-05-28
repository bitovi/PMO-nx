import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PmoOrderComponent } from './pmo-order.component';

describe('PmoOrderComponent', () => {
  let component: PmoOrderComponent;
  let fixture: ComponentFixture<PmoOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PmoOrderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PmoOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
