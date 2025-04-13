import type { Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { PasswordRecovery } from './auth/components/pass-recover/pass.component';
import { AltaAlumno } from './auth/components/alta-alumno/alumno.component';
import { HomeAdmComponent } from './admin/pages/home-page.component';
import { CardsComponent } from './admin/components/cards-registrar/cards.component';
import { RegistrarEntrada } from './admin/components/registrar-entrada/entrada.component';
import { CardsCuentasComponent } from './admin/components/cards-cuentas/cards.component';
import { RegistroViajesComponent } from './admin/components/registro-viajes/registro-viajes.component';
import { ChoferAltaComponent } from './admin/components/alta-chofer/chofer.component';
import { ListarAlumnosComponent } from './admin/components/listar-alumnos/listar-alumnos.component';
import { ListarChoferesComponent } from './admin/components/listar-choferes/listar-choferes.component';
import { EditarAlumno } from './admin/components/editar-alumno/editar-alumno.component';
import { EditarChoferComponent } from './admin/components/editar-chofer/editar-chofer.component';

export const routes: Routes = [
  {
    // Default Route
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },{
    path: 'login',
    component: LoginComponent,
  },{
    path: 'password-recovery',
    component: PasswordRecovery,
  },{
    path: 'alta-alumno',
    component: AltaAlumno,
  },{
    path: 'admin',
    component: HomeAdmComponent,
    children: [
      { 
        path: '', 
        redirectTo: 'registrar', 
        pathMatch: 'full', 
      }, {
        path: 'registrar',
        component: CardsComponent,
        data: { title: 'Registro de Viajes' }
      },{
          path: 'registrar-entrada',
          component: RegistrarEntrada,
          data: { title: 'Ingresar Viaje' }
        },
      {
        path: 'reportar',
        component: CardsComponent,
        data: { title: 'Reportar Falla' }
      }, {
        path: 'viajes',
        component: RegistroViajesComponent,
        data: { title: 'Listar Viajes' }
      }, {
        path: 'administrar-cuentas',
        component: CardsCuentasComponent,
        data: { title: 'Administrar Cuentas' }
      },{
          path: 'listar-alumnos',
          component: ListarAlumnosComponent,
          data: { title: 'Listar Alumnos' }
        },{
            path:'editar-alumno',
            component: EditarAlumno,
            data: { title: 'Editar Alumno' }
            },
        {
          path:'listar-choferes',
          component: ListarChoferesComponent,
          data: { title: 'Listar Choferes' }
        },{
            path:'editar-chofer',
            component: EditarChoferComponent,
            data: { title: 'Editar Chofer' }
          },
      {
        path: 'alta-cuentas',
        component: CardsCuentasComponent,
        data: { title: 'Dar de alta' }
      },{
          path: 'alta-alumno',
          component: AltaAlumno,
          data: { title: 'Ingresar nuevo alumno' }
      },{
          path: 'alta-chofer',
          component: ChoferAltaComponent,
          data: { title: 'Ingresar nuevo chofer' }
        },
    ]
  }


];