import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'alta-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.scss'],
  imports:[CommonModule]
})
export class AltaAlumno {
  registrationForm: FormGroup;
  selectedImage: string | ArrayBuffer | null = null;

  constructor(private fb: FormBuilder, private router:Router) {
    this.registrationForm = this.fb.group({
      nombreCompleto: ['', Validators.required],
      matricula: ['', Validators.required],
      correoElectronico: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required, Validators.minLength(8)]],
      confirmarContrasena: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      console.log('Form Submitted', this.registrationForm.value);
    }
  }

  selectProfilePhoto(event: Event): void {
    const input = event.target as HTMLInputElement;
  // biome-ignore lint/complexity/useOptionalChain: <explanation>
  if (input.files && input.files[0]) {
    const file = input.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      this.selectedImage = reader.result;
    };

    reader.readAsDataURL(file);
  }
  }

  backToLogin(){
    const currentUrl = this.router.url;

    if (currentUrl.startsWith('/admin/')) {
      this.router.navigateByUrl('/admin/alta-cuentas');
    } else {
      this.router.navigateByUrl('/login');
    }
  }
}
