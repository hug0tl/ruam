import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import type { Alumno } from '../../interfaces/alumno.interface';

@Component({
  selector: 'alta-alumno',
  templateUrl: './editar-alumno.component.html',
  styleUrls: ['./editar-alumno.component.scss'],
  imports:[CommonModule]
})
export class EditarAlumno {
  registrationForm: FormGroup;
  selectedImage: string | ArrayBuffer | null = null;
  alumno: Alumno | null = null;

  
  constructor(private fb: FormBuilder, private router:Router) {
    this.registrationForm = this.fb.group({
      nombreCompleto: ['', Validators.required],
      matricula: ['', Validators.required],
      correoElectronico: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required, Validators.minLength(8)]],
      confirmarContrasena: ['', Validators.required],
    });
    const navigation = this.router.getCurrentNavigation();
    // biome-ignore lint/complexity/useLiteralKeys: <explanation>
    this.alumno = navigation?.extras?.state?.['alumno'] || null;
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

  backTo(){
    this.router.navigateByUrl('/admin/listar-alumnos');
  }
}
