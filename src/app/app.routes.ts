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
        pathMatch: 'full' 
      }, {
        path: 'registrar',
        component: CardsComponent
      },{
          path: 'registrar-entrada',
          component: RegistrarEntrada
        },
      {
        path: 'reportar',
        component: CardsComponent
      }, {
        path: 'viajes',
        component: RegistroViajesComponent
      }, {
        path: 'administrar-cuentas',
        component: CardsCuentasComponent
      },{
          path: 'listar-alumnos',
          component: ListarAlumnosComponent
        },{
            path:'editar-alumno',
            component: EditarAlumno
            },
        {
          path:'listar-choferes',
          component: ListarChoferesComponent
        },{
            path:'editar-chofer',
            component: EditarChoferComponent
          },
      {
        path: 'alta-cuentas',
        component: CardsCuentasComponent
      },{
          path: 'alta-alumno',
          component: AltaAlumno
      },{
          path: 'alta-chofer',
          component: ChoferAltaComponent
        },

      // {
      //   path: 'listar',
      //   // component: CardsComponent
      // },
      // {
      //   path: 'cuentas',
      //   // component: AdminConfiguracionComponent
      // },
      // {
      //   path: 'usuarios', 
      //   // component: AdminUsuariosComponent
      // }
    ]
  }


];