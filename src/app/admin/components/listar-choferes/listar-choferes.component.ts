import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import type { Chofer } from '../../interfaces/chofer.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'adm-registro-entrada',
  templateUrl: './listar-choferes.component.html',
  styleUrls: ['./listar-choferes.component.scss'],
  imports:[CommonModule, FormsModule]
})
export class ListarChoferesComponent {
  filtroId= '';
  constructor(private router:Router){}

  public alumnos: Chofer[] = [
    {
      "id": "UVN-2025-001",
      "nombre": "Carlos Mendoza",
      "fechaNacimiento": "1990-05-15",
      "tipo": "URVAN",
      "fotoPerfil": "https://example.com/fotos/carlos_mendoza.jpg"
    },
    {
      "id": "RTP-2025-002",
      "nombre": "Laura Vargas",
      "fechaNacimiento": "1985-12-20",
      "tipo": "RTP",
      "fotoPerfil": "https://example.com/fotos/laura_vargas.png"
    },
    {
      "id": "MCR-2025-003",
      "nombre": "Pedro Gómez",
      "fechaNacimiento": "1998-03-10",
      "tipo": "Micro",
      "fotoPerfil": "https://example.com/fotos/pedro_gomez.jpeg"
    },
    {
      "id": "UVN-2025-004",
      "nombre": "Sofía Ruiz",
      "fechaNacimiento": "1992-08-01",
      "tipo": "URVAN",
      "fotoPerfil": "https://example.com/fotos/sofia_ruiz.gif"
    },
    {
      "id": "RTP-2025-005",
      "nombre": "Javier Díaz",
      "fechaNacimiento": "1988-11-25",
      "tipo": "RTP",
      "fotoPerfil": "https://example.com/fotos/javier_diaz.svg"
    },
    {
      "id": "MCR-2025-006",
      "nombre": "Ana Sánchez",
      "fechaNacimiento": "1995-07-05",
      "tipo": "Micro",
      "fotoPerfil": "https://example.com/fotos/ana_sanchez.bmp"
    },
    {
      "id": "UVN-2025-007",
      "nombre": "Manuel Torres",
      "fechaNacimiento": "1991-01-30",
      "tipo": "URVAN",
      "fotoPerfil": "https://example.com/fotos/manuel_torres.tiff"
    },
    {
      "id": "RTP-2025-008",
      "nombre": "Isabel Flores",
      "fechaNacimiento": "1987-09-18",
      "tipo": "RTP",
      "fotoPerfil": "https://example.com/fotos/isabel_flores.webp"
    },
    {
      "id": "MCR-2025-009",
      "nombre": "Ricardo Castro",
      "fechaNacimiento": "1999-04-12",
      "tipo": "Micro",
      "fotoPerfil": "https://example.com/fotos/ricardo_castro.heic"
    },
    {
      "id": "UVN-2025-010",
      "nombre": "Elena Jiménez",
      "fechaNacimiento": "1993-06-22",
      "tipo": "URVAN",
      "fotoPerfil": "https://example.com/fotos/elena_jimenez.avif"
    }
  ]
  
  get filtroID(): Chofer[] {
    const filtro = this.filtroId.trim().toLowerCase();
    return this.alumnos.filter(alumno =>
      alumno.id.toLowerCase().includes(filtro)
    );
  }
  editarChofer(chofer: Chofer) {
    this.router.navigate(['/admin/editar-chofer'], {
      state: { chofer }
    });
  }
  limpiar() {
    this.filtroId = '';
  }
  return(){
    this.router.navigateByUrl('admin/administrar-cuentas');
  }
}
