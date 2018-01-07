import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing, appRoutingProviders } from './app.routing';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InicioComponent } from './inicio/inicio.component';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { NotasPersonalesComponent } from './notas-personales/notas-personales.component';
import { NotasGlobalesComponent } from './notas-globales/notas-globales.component';
import { NuevoProyectoComponent } from './nuevo-proyecto/nuevo-proyecto.component';
import { NuevoNotaPersonalComponent } from './nuevo-nota-personal/nuevo-nota-personal.component';
import { NuevoNotaGlobalComponent } from './nuevo-nota-global/nuevo-nota-global.component';
import { PerfilComponent } from './perfil/perfil.component';
import { MiConfiguracionComponent } from './mi-configuracion/mi-configuracion.component';
import { EditarProyectoComponent } from './editar-proyecto/editar-proyecto.component';
import { NuevoInformeComponent } from './nuevo-informe/nuevo-informe.component';
import { InformeComponent } from './informe/informe.component';
import { EditarInformeComponent } from './editar-informe/editar-informe.component';
import { EditarTicketComponent } from './editar-ticket/editar-ticket.component';
import { TicketComponent } from './ticket/ticket.component';
import { NuevoTicketComponent } from './nuevo-ticket/nuevo-ticket.component';
import { EditarNotaGlobalComponent } from './editar-nota-global/editar-nota-global.component';
import { EditarNotaPersonalComponent } from './editar-nota-personal/editar-nota-personal.component';
import { NotaPersonalComponent } from './nota-personal/nota-personal.component';
import { NotaGlobalComponent } from './nota-global/nota-global.component';
import { TicketsComponent } from './tickets/tickets.component';
import { InformesComponent } from './informes/informes.component';
import { NotasGlobalesProyectoComponent } from './notas-globales-proyecto/notas-globales-proyecto.component';
import { UsuarioRegistroComponent } from './usuario-registro/usuario-registro.component';
import { UsuarioLoginComponent } from './usuario-login/usuario-login.component';
import { EquipoComponent } from './equipo/equipo.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    InicioComponent,
    ProyectoComponent,
    NotasPersonalesComponent,
    NotasGlobalesComponent,
    NuevoProyectoComponent,
    NuevoNotaPersonalComponent,
    NuevoNotaGlobalComponent,
    PerfilComponent,
    MiConfiguracionComponent,
    EditarProyectoComponent,
    NuevoInformeComponent,
    InformeComponent,
    EditarInformeComponent,
    EditarTicketComponent,
    TicketComponent,
    NuevoTicketComponent,
    EditarNotaGlobalComponent,
    EditarNotaPersonalComponent,
    NotaPersonalComponent,
    NotaGlobalComponent,
    TicketsComponent,
    InformesComponent,
    NotasGlobalesProyectoComponent,
    UsuarioRegistroComponent,
    UsuarioLoginComponent,
    EquipoComponent
  ],
  imports: [
    HttpModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
