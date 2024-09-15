import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceDataListComponent } from './price-data-list.component';

describe('PriceDataListComponent', () => {
  let component: PriceDataListComponent;
  let fixture: ComponentFixture<PriceDataListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PriceDataListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PriceDataListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
