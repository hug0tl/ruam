import { inject, Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, docData, query, where } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreDataService {

  private firestore = inject(Firestore);
  constructor() { }

  getUsuarios(): Observable<any[]> {
    const usuariosRef = collection(this.firestore, 'usuarios');
    return collectionData(usuariosRef, { idField: 'id' }) as Observable<any[]>;
  }


  // Obtener un usuario específico por ID
  getUsuario(id: string): Observable<any> {
    const usuarioRef = doc(this.firestore, `usuarios/${id}`);
    return docData(usuarioRef, { idField: 'id' }) as Observable<any>;
  }

  // Filtrar usuarios por tipo (para obtener solo choferes si es necesario)
  getUsuariosPorTipo(tipoUsuarioId: string): Observable<any[]> {
    const usuariosRef = collection(this.firestore, 'usuarios');
    const q = query(usuariosRef, where('tipoUsuarioId', '==', tipoUsuarioId));
    return collectionData(q, { idField: 'id' }) as Observable<any[]>;
  }

}