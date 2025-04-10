import type { Chofer } from "./chofer.interface";

export interface RegistroViaje extends Chofer {
  horaEntrada: string;
  horaSalida: string;
  noPasajeros: number;
  estado: "Completado" | "Cancelado" | "Pendiente"; // Puedes añadir más estados si es necesario
}