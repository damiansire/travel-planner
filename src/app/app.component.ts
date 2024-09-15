import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { PriceDataListComponent } from './pages/price-data-list/price-data-list.component';
import { TravelPathCalculatorComponent } from './pages/travel-path-calculator/travel-path-calculator.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TravelPathCalculatorComponent,
    PriceDataListComponent,
    ButtonModule,
    SidebarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'travel-planner';
}
