import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PmoOrderDetailComponent } from './pmo-order-detail.component';

describe('PmoOrderDetailComponent', () => {
  let component: PmoOrderDetailComponent;
  let fixture: ComponentFixture<PmoOrderDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PmoOrderDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PmoOrderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
