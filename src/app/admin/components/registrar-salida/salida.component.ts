import { Component } from '@angular/core';
import type { RegistroViaje } from '../../interfaces/registro-viajes.interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'adm-registro-salida',
  templateUrl: './salida.component.html',
  styleUrls: ['./salida.component.scss'],
  imports:[CommonModule, FormsModule]
})
export class RegistroSalidaComponent {
  filtroId= '';
  filtroEstado = '';
  filtroTipo = '';

  public characters: RegistroViaje[] = [
    {
      "id": "BFC-123",
      "nombre": "Ana Rodríguez",
      "horaEntrada": "08:15 AM",
      "horaSalida": "--:-- --",
      "fechaNacimiento": "2025-11-10",
      "noPasajeros": 0,
      "estado": "Pendiente",
      "tipo": "RTP"
    },
    {
      "id": "DHF-789",
      "nombre": "Sofía Vargas",
      "horaEntrada": "09:40 AM",
      "horaSalida": "--:-- --",
      "fechaNacimiento": "2026-01-05",
      "noPasajeros": 0,
      "estado": "Pendiente",
      "tipo": "URVAN"
    },
    {
      "id": "EJI-012",
      "nombre": "Javier Díaz",
      "horaEntrada": "11:00 AM",
      "horaSalida": "--:-- --",
      "fechaNacimiento": "2025-12-18",
      "noPasajeros": 0,
      "estado": "Pendiente",
      "tipo": "RTP"
    },
    {
      "id": "GLK-678",
      "nombre": "Manuel Pérez",
      "horaEntrada": "06:30 AM",
      "horaSalida": "--:-- --",
      "fechaNacimiento": "2026-02-14",
      "noPasajeros": 0,
      "estado": "Pendiente",
      "tipo": "URVAN"
    },
    {
      "id": "HML-901",
      "nombre": "Isabel Gómez",
      "horaEntrada": "12:15 PM",
      "horaSalida": "--:-- --",
      "fechaNacimiento": "2025-11-29",
      "noPasajeros": 0,
      "estado": "Pendiente",
      "tipo": "RTP"
    },
    {
      "id": "JOO-567",
      "nombre": "Elena Fernández",
      "horaEntrada": "14:00 PM",
      "horaSalida": "--:-- --",
      "fechaNacimiento": "2026-03-21",
      "noPasajeros": 0,
      "estado": "Pendiente",
      "tipo": "URVAN"
    },
    {
      "id": "KPP-890",
      "nombre": "Luis Torres",
      "horaEntrada": "15:30 PM",
      "horaSalida": "--:-- --",
      "fechaNacimiento": "2025-10-05",
      "noPasajeros": 0,
      "estado": "Pendiente",
      "tipo": "RTP"
    }
  ]
  
  get filteredCharacters(): RegistroViaje[] {
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
}
