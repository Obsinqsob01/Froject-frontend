import { Component, OnInit } from '@angular/core';

import { Ticket } from '../modelos/ticket';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {
  public tickets: Ticket[];

  constructor() { }

  ngOnInit() {
  }

}
