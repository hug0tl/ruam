import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'password-recovery',
  templateUrl: './pass.component.html',
  styleUrl: './pass.component.scss',
})
export class PasswordRecovery {
  constructor(private router:Router){

  }
  navigateToLogin(){
    this.router.navigateByUrl('/login');
  }
}
