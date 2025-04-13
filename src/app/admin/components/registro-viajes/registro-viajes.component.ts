import { Component } from '@angular/core';
import type { RegistroViaje } from '../../interfaces/registro-viajes.interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'adm-registro-entrada',
  templateUrl: './registro-viajes.component.html',
  styleUrls: ['./registro-viajes.component.scss'],
  imports:[CommonModule, FormsModule]
})
export class RegistroViajesComponent {
  filtroId= '';
  filtroEstado = '';
  filtroTipo = '';
  currentPage = 1;
  itemsPerPage = 6;


  public characters: RegistroViaje[] = [
    {
      "id": "BFC-123",
      "nombre": "Ana Rodríguez",
      "horaEntrada": "08:15 AM",
      "horaSalida": "08:35 AM",
      "fechaNacimiento": "2025-11-10",
      "noPasajeros": 30,
      "estado": "Completado",
      "tipo": "RTP"
    },
    {
      "id": "CGB-456",
      "nombre": "Pedro Gómez",
      "horaEntrada": "--:-- --",
      "horaSalida": "--:-- --",
      "fechaNacimiento": "2025-09-22",
      "noPasajeros": 0,
      "estado": "Cancelado",
      "tipo": "Micro"
    },
    {
      "id": "DHF-789",
      "nombre": "Sofía Vargas",
      "horaEntrada": "09:40 AM",
      "horaSalida": "10:05 AM",
      "fechaNacimiento": "2026-01-05",
      "noPasajeros": 18,
      "estado": "Completado",
      "tipo": "URVAN"
    },
    {
      "id": "EJI-012",
      "nombre": "Javier Díaz",
      "horaEntrada": "11:00 AM",
      "horaSalida": "11:30 AM",
      "fechaNacimiento": "2025-12-18",
      "noPasajeros": 45,
      "estado": "Completado",
      "tipo": "RTP"
    },
    {
      "id": "FKJ-345",
      "nombre": "Laura Sánchez",
      "horaEntrada": "--:-- --",
      "horaSalida": "--:-- --",
      "fechaNacimiento": "2025-08-01",
      "noPasajeros": 0,
      "estado": "Cancelado",
      "tipo": "Micro"
    },
    {
      "id": "GLK-678",
      "nombre": "Manuel Pérez",
      "horaEntrada": "06:30 AM",
      "horaSalida": "06:55 AM",
      "fechaNacimiento": "2026-02-14",
      "noPasajeros": 25,
      "estado": "Completado",
      "tipo": "URVAN"
    },
    {
      "id": "HML-901",
      "nombre": "Isabel Gómez",
      "horaEntrada": "12:15 PM",
      "horaSalida": "12:40 PM",
      "fechaNacimiento": "2025-11-29",
      "noPasajeros": 50,
      "estado": "Completado",
      "tipo": "RTP"
    },
    {
      "id": "INM-234",
      "nombre": "Ricardo Ruiz",
      "horaEntrada": "--:-- --",
      "horaSalida": "--:-- --",
      "fechaNacimiento": "2025-07-07",
      "noPasajeros": 0,
      "estado": "Cancelado",
      "tipo": "Micro"
    },
    {
      "id": "JOO-567",
      "nombre": "Elena Fernández",
      "horaEntrada": "14:00 PM",
      "horaSalida": "14:22 PM",
      "fechaNacimiento": "2026-03-21",
      "noPasajeros": 12,
      "estado": "Completado",
      "tipo": "URVAN"
    },
    {
      "id": "KPP-890",
      "nombre": "Luis Torres",
      "horaEntrada": "15:30 PM",
      "horaSalida": "15:58 PM",
      "fechaNacimiento": "2025-10-05",
      "noPasajeros": 40,
      "estado": "Completado",
      "tipo": "RTP"
    }
  ]
  
  get filtrarViajes(): RegistroViaje[] {
    return this.characters.filter(viaje => {
      const matchId = viaje.id.toLowerCase().includes(this.filtroId.toLowerCase());
      const matchEstado = !this.filtroEstado || viaje.estado === this.filtroEstado;
      const matchTipo = !this.filtroTipo || viaje.tipo === this.filtroTipo;
      
      return matchId && matchEstado && matchTipo;
    });
  }

  limpiarFiltros() {
    this.filtroId = '';
    this.filtroEstado = '';
    this.filtroTipo = '';
  }

  get datos(){
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.filtrarViajes.slice(start, start + this.itemsPerPage);
  }

  get totalPages() {
    return Math.ceil(this.filtrarViajes.length / this.itemsPerPage);
  }

  cambiarPaginacion(direccion: number) {
    this.currentPage += direccion;
    if (this.currentPage < 1) this.currentPage = 1;
    if (this.currentPage > this.totalPages) this.currentPage = this.totalPages;
  }
}
