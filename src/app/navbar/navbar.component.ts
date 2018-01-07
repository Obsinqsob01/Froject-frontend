import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public sesion: Boolean;

  constructor() { }

  ngOnInit() {
    if(localStorage.getItem("sesion")){
      this.sesion = true;
    } else {
      this.sesion = false;
    }
  }
}
