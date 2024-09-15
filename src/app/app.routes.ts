import { Routes } from '@angular/router';
import { FlightSelectorComponent } from '@pages/flight-selector/flight-selector.component';
import { PriceDataListComponent } from '@pages/price-data-list/price-data-list.component';
import { TravelPathCalculatorComponent } from '@pages/travel-path-calculator/travel-path-calculator.component';

export const routes: Routes = [
  { path: '**', redirectTo: 'all-tickets' },
  { path: 'all-tickets', component: PriceDataListComponent },
  { path: 'travel-path-calculator', component: TravelPathCalculatorComponent },
  { path: 'flight-selector', component: FlightSelectorComponent },
];
