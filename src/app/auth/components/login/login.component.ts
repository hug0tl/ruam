import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseAuthService } from '../../services/firebase-auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  imports: [CommonModule, FormsModule]
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  showPassword: boolean = false;
  emailError: string = '';
  passwordError: string = '';
  loginError: string = '';

  constructor(private router:Router, private firebaseAuth: FirebaseAuthService){

  }
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  validateEmail(): boolean {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    
    if (!this.email) {
      this.emailError = 'El correo electrónico es obligatorio';
      return false;
    } else if (!emailRegex.test(this.email)) {
      this.emailError = 'Formato de correo electrónico inválido';
      return false;
    } else {
      this.emailError = '';
      return true;
    }
  }
  validatePassword(): boolean {
    if (!this.password) {
      this.passwordError = 'La contraseña es obligatoria';
      return false;
    } else if (this.password.length < 6) {
      this.passwordError = 'La contraseña debe tener al menos 6 caracteres';
      return false;
    } else {
      this.passwordError = '';
      return true;
    }
  }
  navigateToRecoverPassword(){
    this.router.navigateByUrl('/password-recovery');
  }
  navigateToAltaAlumno(){
    this.router.navigateByUrl('/alta-alumno');
  }
  login(){
    // Reiniciar mensaje de error general
    this.loginError = '';
    
    // Validar campos
    const isEmailValid = this.validateEmail();
    const isPasswordValid = this.validatePassword();

    if (isEmailValid && isPasswordValid) {
      this.firebaseAuth.login(this.email, this.password)
        .then(user => {
          console.log('Usuario logueado:', user);
          this.router.navigateByUrl('/admin');
        })
        .catch(err => {
          console.error('Error al iniciar sesión:', err);
          this.loginError = 'Usuario o contraseña incorrectos';
        });
    }
  }
}
