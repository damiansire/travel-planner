import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelNavbarComponent } from './travel-navbar.component';

describe('TravelNavbarComponent', () => {
  let component: TravelNavbarComponent;
  let fixture: ComponentFixture<TravelNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TravelNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravelNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
