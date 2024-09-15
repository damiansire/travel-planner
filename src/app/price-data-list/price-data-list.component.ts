import { Component, inject } from '@angular/core';
import { TravelPriceService } from '../services/travel-price.service';
import { FlightDetails } from '../interfaces/travel.interfaces';
import { FlightCardComponent } from './flight-card/flight-card.component';

@Component({
  selector: 'app-price-data-list',
  standalone: true,
  imports: [FlightCardComponent],
  templateUrl: './price-data-list.component.html',
  styleUrl: './price-data-list.component.css',
})
export class PriceDataListComponent {
  _travelPrice = inject(TravelPriceService);
  allTickets: FlightDetails[] = [];
  constructor() {}
  ngOnInit() {
    this._travelPrice.getAllTicket().subscribe((x) => (this.allTickets = x));
  }
}
