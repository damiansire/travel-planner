import { Component, inject } from '@angular/core';
import { TravelPriceService } from '../shared/services/travel-price.service';
import { TableModule } from 'primeng/table';
import { FlightDetails } from '../shared/interfaces/travel.interfaces';

@Component({
  selector: 'app-price-data-list',
  standalone: true,
  imports: [TableModule],
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
