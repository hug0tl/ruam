import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import type { Alumno } from '../../interfaces/alumno.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'adm-registro-entrada',
  templateUrl: './listar-alumnos.component.html',
  styleUrls: ['./listar-alumnos.component.scss'],
  imports:[CommonModule, FormsModule]
})
export class ListarAlumnosComponent {
  filtroMatricula= '';
  constructor(private router:Router){}

  public alumnos: Alumno[] = [
    {
      "matricula": "M-2025-001",
      "nombre": "Ana Pérez",
      "correoElectronico": "ana.perez@example.com",
      "fotoPerfil": "https://m.media-amazon.com/images/M/MV5BMjU4Mzc0Ym…ZmM1OWZmOTAyOTBlXkEyXkFqcGc@._V1_FMjpg_UX688_.jpg"
    },
    {
      "matricula": "M-2025-002",
      "nombre": "Carlos López",
      "correoElectronico": "carlos.lopez@example.com",
      "fotoPerfil": "https://m.media-amazon.com/images/M/MV5BMjU4Mzc0Ym…ZmM1OWZmOTAyOTBlXkEyXkFqcGc@._V1_FMjpg_UX688_.jpg"
    },
    {
      "matricula": "M-2025-003",
      "nombre": "Sofía Gómez",
      "correoElectronico": "sofia.gomez@example.com",
      "fotoPerfil": "https://m.media-amazon.com/images/M/MV5BMjU4Mzc0Ym…ZmM1OWZmOTAyOTBlXkEyXkFqcGc@._V1_FMjpg_UX688_.jpg"
    },
    {
      "matricula": "M-2025-004",
      "nombre": "Javier Vargas",
      "correoElectronico": "javier.vargas@example.com",
      "fotoPerfil": "https://m.media-amazon.com/images/M/MV5BMjU4Mzc0Ym…ZmM1OWZmOTAyOTBlXkEyXkFqcGc@._V1_FMjpg_UX688_.jpg"
    },
    {
      "matricula": "M-2025-005",
      "nombre": "Laura Ruiz",
      "correoElectronico": "laura.ruiz@example.com",
      "fotoPerfil": "https://m.media-amazon.com/images/M/MV5BMjU4Mzc0Ym…ZmM1OWZmOTAyOTBlXkEyXkFqcGc@._V1_FMjpg_UX688_.jpg"
    },
    {
      "matricula": "M-2025-006",
      "nombre": "Manuel Torres",
      "correoElectronico": "manuel.torres@example.com",
      "fotoPerfil": "https://m.media-amazon.com/images/M/MV5BMjU4Mzc0Ym…ZmM1OWZmOTAyOTBlXkEyXkFqcGc@._V1_FMjpg_UX688_.jpg"
    },
    {
      "matricula": "M-2025-007",
      "nombre": "Isabel Flores",
      "correoElectronico": "isabel.flores@example.com",
      "fotoPerfil": "https://m.media-amazon.com/images/M/MV5BMjU4Mzc0Ym…ZmM1OWZmOTAyOTBlXkEyXkFqcGc@._V1_FMjpg_UX688_.jpg"
    },
    {
      "matricula": "M-2025-008",
      "nombre": "Ricardo Castro",
      "correoElectronico": "ricardo.castro@example.com",
      "fotoPerfil": "https://m.media-amazon.com/images/M/MV5BMjU4Mzc0Ym…ZmM1OWZmOTAyOTBlXkEyXkFqcGc@._V1_FMjpg_UX688_.jpg"
    },
    {
      "matricula": "M-2025-009",
      "nombre": "Elena Jiménez",
      "correoElectronico": "elena.jimenez@example.com",
      "fotoPerfil": "https://m.media-amazon.com/images/M/MV5BMjU4Mzc0Ym…ZmM1OWZmOTAyOTBlXkEyXkFqcGc@._V1_FMjpg_UX688_.jpg"
    },
    {
      "matricula": "M-2025-010",
      "nombre": "Luis Mendoza",
      "correoElectronico": "luis.mendoza@example.com",
      "fotoPerfil": "https://m.media-amazon.com/images/M/MV5BMjU4Mzc0Ym…ZmM1OWZmOTAyOTBlXkEyXkFqcGc@._V1_FMjpg_UX688_.jpg"
    }
  ]
  
  get filtroMatriculas(): Alumno[] {
    const filtro = this.filtroMatricula.trim().toLowerCase();
    return this.alumnos.filter(alumno =>
      alumno.matricula.toLowerCase().includes(filtro)
    );
  }
  editarAlumno(alumno: Alumno) {
    this.router.navigate(['/admin/editar-alumno'], {
      state: { alumno }
    });

  }
  limpiar() {
    this.filtroMatricula = '';
  }
  return(){
    this.router.navigateByUrl('admin/administrar-cuentas');
  }
}
