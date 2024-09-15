import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TravelPathCalculatorComponent } from './travel-path-calculator/travel-path-calculator.component';
import { PriceDataListComponent } from './price-data-list/price-data-list.component';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TravelPathCalculatorComponent,
    PriceDataListComponent,
    ButtonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'travel-planner';
}
