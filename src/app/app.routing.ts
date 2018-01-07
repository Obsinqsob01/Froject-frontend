import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
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


const appRoutes: Routes = [
    {path: '', component: InicioComponent},
    {path: 'proyecto/nuevo', component: NuevoProyectoComponent},
    {path: 'proyecto/:slug', component: ProyectoComponent},
    {path: 'proyecto/:slug/editar', component: EditarProyectoComponent},

    {path: 'proyecto/:slug/equipo', component: EquipoComponent},

    {path: 'proyecto/:slug/informe/nuevo', component: NuevoInformeComponent},
    {path: 'proyecto/:slug/informe/editar/:id', component: EditarInformeComponent},
    {path: 'proyecto/:slug/informe/:id', component: InformeComponent},
    {path: 'proyecto/:slug/informe', component: InformesComponent},

    {path: 'proyecto/:slug/ticket/nuevo', component: NuevoTicketComponent},
    {path: 'proyecto/:slug/ticket/editar/:id', component: EditarTicketComponent},
    {path: 'proyecto/:slug/ticket/:id', component: TicketComponent},
    {path: 'proyecto/:slug/ticket', component: TicketsComponent},

    {path: 'proyecto/:slug/notas', component: NotasGlobalesProyectoComponent},
    {path: 'proyecto/:slug/notas/nuevo', component: NuevoNotaGlobalComponent},
    {path: 'proyecto/:slug/notas/editar/:id', component: EditarNotaGlobalComponent},
    {path: 'proyecto/:id', component: NotaGlobalComponent},

    {path: 'notas', component: NotasGlobalesComponent},

    {path: 'mis-notas', component: NotasPersonalesComponent},
    {path: 'mis-notas/nuevo', component: NuevoNotaPersonalComponent},
    {path: 'mis-notas/editar/:id', component: EditarNotaPersonalComponent},
    {path: 'mis-notas/:id', component: NotaPersonalComponent},

    {path: 'perfil/configuracion', component: MiConfiguracionComponent},
    {path: 'perfil/:username', component: PerfilComponent},

    {path: 'usuario/registro', component: UsuarioRegistroComponent},
    {path: 'usuario/login', component: UsuarioLoginComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
