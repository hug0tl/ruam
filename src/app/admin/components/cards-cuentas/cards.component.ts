import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: "adm-cuentas",
  templateUrl: "./cards.component.html", 
  styleUrls: ["./cards.component.scss"],
})
export class CardsCuentasComponent {
  cardTitleAlumno = '';
  cardTitleChofer = '';

  constructor(private router:Router){
    this.setTitles();
  }

  setTitles() {
    const currentUrl = this.router.url;
    if (currentUrl.includes('/admin/administrar-cuentas')) {
      this.cardTitleAlumno = 'Editar Alumnos';
      this.cardTitleChofer = 'Editar Choferes';
    } else if (currentUrl.includes('/admin/alta-cuentas')) {
      this.cardTitleAlumno = 'Alta Alumno';
      this.cardTitleChofer = 'Alta Chofer';
    }
  }

  navigateToAlumno(){
    const currentUrl = this.router.url;
    if (currentUrl.includes('/admin/administrar-cuentas')) {
      this.router.navigateByUrl('/admin/listar-alumnos');
    } else if (currentUrl.includes('/admin/alta-cuentas')) {
      this.router.navigateByUrl('/admin/alta-alumno');
    }
  }

  navigateToChofer(){
    const currentUrl = this.router.url;
    if (currentUrl.includes('/admin/administrar-cuentas')) {
      this.router.navigateByUrl('/admin/listar-choferes');
    } else if (currentUrl.includes('/admin/alta-cuentas')) {
      this.router.navigateByUrl('/admin/alta-chofer');
    }
  }
}
