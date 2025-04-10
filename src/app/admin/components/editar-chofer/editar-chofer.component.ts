// driver-registration.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import type {Chofer} from '../../interfaces/chofer.interface'

@Component({
  selector: 'appchofer-alta',
  templateUrl: './editar-chofer.component.html',
  styleUrls: ['./editar-chofer.component.scss'],
  imports:[CommonModule]
})
export class EditarChoferComponent {
  choferForm: FormGroup;
  showOptions = false;
  selectedImage: string | ArrayBuffer | null = null;
  chofer: Chofer | null = null;

  constructor(private fb: FormBuilder, private router:Router) {
    this.choferForm = this.fb.group({
      nombreCompleto: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      ruta: ['', Validators.required],
    });
    const navigation = this.router.getCurrentNavigation();
    // biome-ignore lint/complexity/useLiteralKeys: <explanation>
    this.chofer = navigation?.extras?.state?.['chofer'] || null; 
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

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  openDatePicker(datePicker: any) {
    datePicker.showPicker();
  }

  // Listar
  toggleOptions(): void {
    this.showOptions = !this.showOptions;
     // Alternar la visibilidad de las opciones
  }

  selectRoute(route: string): void {
    this.choferForm.patchValue({ ruta: route }); 
    // Establecer el valor del campo de entrada
    this.showOptions = false; 
    // Ocultar las opciones después de seleccionar
  }
  backTo(){
    this.router.navigateByUrl('/admin/listar-choferes');
  }
}
