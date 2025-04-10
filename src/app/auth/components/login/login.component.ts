import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  imports: []
})
export class LoginComponent {
  constructor(private router:Router){

  }
  navigateToRecoverPassword(){
    this.router.navigateByUrl('/password-recovery');
  }
  navigateToAltaAlumno(){
    this.router.navigateByUrl('/alta-alumno');
  }
  navigateToAdmin(){
    this.router.navigateByUrl('/admin');
  }
}
