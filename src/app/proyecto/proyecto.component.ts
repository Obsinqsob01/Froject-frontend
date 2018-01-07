import { Component, OnInit } from '@angular/core';

import { Proyecto } from '../modelos/proyecto';
@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.scss']
})
export class ProyectoComponent implements OnInit {
  public proyecto: Proyecto;

  constructor() { 
    this.proyecto = new Proyecto(0, '', '', '', new Date() , 0);
  }

  ngOnInit() {
  }

}
