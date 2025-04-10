  import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

  @Component({
    selector: 'adm-registro-entrada',
    templateUrl: './entrada.component.html',
    styleUrls: ['./entrada.component.scss'],
    imports:[CommonModule, FormsModule]
  })
  export class RegistrarEntrada {
    constructor(private router:Router){}

    codigoConductor = '';
    // entradas: {
    //   codigo: string;
    //   hora: string;
    //   fecha: string;
    // }[] = [];
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    entradas: any[] = [];

    agregarEntrada() {
      if (!this.codigoConductor.trim()) return;

      const ahora = new Date();

      const nuevaEntrada = {
        codigo: this.codigoConductor,
        // hora: ahora.toLocaleTimeString(),
        // fecha: ahora.toLocaleDateString()
        hora: ahora.toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' }),
        fecha: ahora.toLocaleDateString('es-MX')
      };

      this.entradas.push(nuevaEntrada);
      this.codigoConductor = ''; // Limpia el input
    }

    navigateToRegistrar(){
      this.router.navigateByUrl('/admin/registrar');
    }
  }
