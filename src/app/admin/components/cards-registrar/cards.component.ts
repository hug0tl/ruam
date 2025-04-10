import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: "adm-registro",
  templateUrl: "./cards.component.html", 
  styleUrls: ["./cards.component.scss"],
})
export class CardsComponent {
  constructor(private router:Router){}

  navigateToRegistrarEntrada(){
    this.router.navigateByUrl('/admin/registrar-entrada');
  }
}
