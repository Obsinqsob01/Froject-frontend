import { Component, OnInit } from '@angular/core';
import { Ticket } from '../modelos/ticket';

@Component({
  selector: 'app-editar-ticket',
  templateUrl: './editar-ticket.component.html',
  styleUrls: ['./editar-ticket.component.scss']
})
export class EditarTicketComponent implements OnInit {
  public ticket: Ticket;

  constructor() {
    this.ticket = new Ticket(0, '', '', '', 0, 0, new Date);
  }

  ngOnInit() {
  }

}
