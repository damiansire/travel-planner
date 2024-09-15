import { Component, Input } from '@angular/core';
import { FlightDetails } from '../../interfaces/travel.interfaces';
import { CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-flight-card',
  standalone: true,
  imports: [CurrencyPipe, DatePipe],
  templateUrl: './flight-card.component.html',
  styleUrl: './flight-card.component.css',
})
export class FlightCardComponent {
  @Input() flight: FlightDetails | undefined;
}
