import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FlightDetails } from '../interfaces/travel.interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TravelPriceService {
  constructor(private http: HttpClient) {}

  getAllTicket(): Observable<FlightDetails[]> {
    return this.http.get<any>('/tickets-data.json');
  }
}
