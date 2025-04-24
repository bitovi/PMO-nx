import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PmoHomeComponent } from './pmo-home.component';

describe('PmoHomeComponent', () => {
  let component: PmoHomeComponent;
  let fixture: ComponentFixture<PmoHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PmoHomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PmoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
