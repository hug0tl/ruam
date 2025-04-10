// driver-registration.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'appchofer-alta',
  templateUrl: './chofer.component.html',
  styleUrls: ['./chofer.component.scss'],
  imports:[CommonModule]
})
export class ChoferAltaComponent {
  choferForm: FormGroup;
  showOptions = false;
  selectedImage: string | ArrayBuffer | null = null;

  constructor(private fb: FormBuilder, private router:Router) {
    this.choferForm = this.fb.group({
      nombreCompleto: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      ruta: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.choferForm.valid) {
      console.log('Driver form submitted:', this.choferForm.value);
      // console.log('Opción seleccionada:', this.opcionSeleccionada);
      // Add your driver registration logic here
    } else {
      this.choferForm.markAllAsTouched();
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

  openDatePicker(datePicker: any) {
    datePicker.showPicker();
  }

  // Listar
  toggleOptions(): void {
    this.showOptions = !this.showOptions; // Alternar la visibilidad de las opciones
  }

  selectRoute(route: string): void {
    this.choferForm.patchValue({ ruta: route }); // Establecer el valor del campo de entrada
    this.showOptions = false; // Ocultar las opciones después de seleccionar
  }
  backToAltaCuentas(){
    this.router.navigateByUrl('/admin/alta-cuentas');
  }
}
