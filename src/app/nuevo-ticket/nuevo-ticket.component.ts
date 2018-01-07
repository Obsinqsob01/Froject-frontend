import { Component, OnInit } from '@angular/core';
import { Ticket } from '../modelos/ticket';

@Component({
  selector: 'app-nuevo-ticket',
  templateUrl: './nuevo-ticket.component.html',
  styleUrls: ['./nuevo-ticket.component.scss']
})
export class NuevoTicketComponent implements OnInit {
  public ticket: Ticket;

  constructor() {
    this.ticket = new Ticket(0, '', '', '', 0, 0, new Date);
  }

  ngOnInit() {
  }

}
