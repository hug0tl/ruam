import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "adm-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent {
  constructor(private router:Router){

  }
  navigateToRegistrar(){
    this.router.navigateByUrl('/admin');
  }
  navigateToReportar(){
    this.router.navigateByUrl('/reportar');
  }
  navigateToAltasCuentas(){
    console.log("hola");
    this.router.navigateByUrl('/admin/alta-cuentas');
  }
  navigateToViajes(){
    this.router.navigateByUrl('/admin/viajes'); 
  }
  navigateToCuentas(){
    this.router.navigateByUrl('/admin/administrar-cuentas');
  }
  cerrarSesion(){
    this.router.navigateByUrl('/login');
  }
}
