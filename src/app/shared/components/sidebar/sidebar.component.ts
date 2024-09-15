import { Component } from '@angular/core';
import { routes } from '../../../app.routes';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  routes = [
    { path: 'all-tickets', name: 'All Tickets' },
    {
      path: 'travel-path-calculator',
      name: 'Path Calculator',
    },
    { path: 'flight-selector', name: 'Flight Selector' },
  ];
}
