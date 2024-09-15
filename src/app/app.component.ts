import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TravelPathCalculatorComponent } from './travel-path-calculator/travel-path-calculator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TravelPathCalculatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'travel-planner';
}
