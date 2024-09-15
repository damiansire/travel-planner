import { Component } from '@angular/core';
import { TravelNavbarComponent } from './components/travel-navbar/travel-navbar.component';
import { PathCardComponent } from './components/path-card/path-card.component';

@Component({
  selector: 'app-travel-path-calculator',
  standalone: true,
  imports: [TravelNavbarComponent, PathCardComponent],
  templateUrl: './travel-path-calculator.component.html',
  styleUrl: './travel-path-calculator.component.css',
})
export class TravelPathCalculatorComponent {}
