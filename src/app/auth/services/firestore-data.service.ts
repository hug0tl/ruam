import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Firestore, collection, collectionData, doc, getDoc } from '@angular/fire/firestore';
import { Observable, switchMap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class FirestoreDataService2 {

  // constructor(private firestore: AngularFirestore) {}
  constructor(private http: HttpClient,
    private afAuth: AngularFireAuth) {}

    getUsuarios(): Observable<any> {
      /*
      return this.firestore.collection('/usuarios/listar').valueChanges({ idField: 'id' });
      */
      return this.afAuth.idToken.pipe(
        // 2. Usar el token para hacer la solicitud HTTP
        switchMap(token => {
          const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
          
          // 3. Hacer la petición a la API
          return this.http.get('https://ruam-backend.onrender.com/api/usuarios/listar/', { headers });
        })
      );
    }

     // Obtiene un usuario por su ID
  /*getUsuarioById(id: string): Observable<any> {
    return this.firestore.collection('/usuarios/listar').doc(id).valueChanges();
  }*/
}
