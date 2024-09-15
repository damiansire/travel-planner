import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelPathCalculatorComponent } from './travel-path-calculator.component';

describe('TravelPathCalculatorComponent', () => {
  let component: TravelPathCalculatorComponent;
  let fixture: ComponentFixture<TravelPathCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TravelPathCalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravelPathCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
