import { Component, OnInit } from '@angular/core';
import { Ticket } from '../modelos/ticket';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {
  public ticket: Ticket;

  constructor() {
    this.ticket = new Ticket(0, '', '', '', 0, 0, new Date);
   }

  ngOnInit() {
  }

}
