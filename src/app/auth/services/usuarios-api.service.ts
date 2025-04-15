import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { getAuth } from 'firebase/auth';
import { environment } from '../../../environments/environment';
<<<<<<< Updated upstream
import { firstValueFrom, Observable, of, switchMap } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
=======
import { firstValueFrom, Observable } from 'rxjs';
>>>>>>> Stashed changes


@Injectable({
  providedIn: 'root'
})
export class UsuariosApiService {

  // private apiUrl = '/api/usuarios/listar/';
  private apiUrl = 'https://ruam-backend.onrender.com/api/usuarios/listar/';
<<<<<<< Updated upstream
  // private apiUrl = `${environment.apiUrl}/usuarios/listar/`;

  constructor(
    private http: HttpClient,
    private afAuth: AngularFireAuth
  ) {}

  private getHeaders() {
    return this.afAuth.idToken.pipe(
      switchMap(token => {
        return of(new HttpHeaders().set('Authorization', `Bearer ${token}`));
      })
    );
  }

  getUsuarios() {
    return this.getHeaders().pipe(
      switchMap(headers => {
        return this.http.get(`${this.apiUrl}/usuarios`, { headers });
      })
    );
  }
=======


  // private apiUrl = `${environment.apiUrl}/usuarios/listar/`;

  constructor(private http: HttpClient,
    private authService: FirebaseAuthServiceHttpClient) {}
>>>>>>> Stashed changes

  async listarUsuarios(): Promise<Usuario[]> {
    const user = await this.afAuth.currentUser;
    if (!user) throw new Error('Usuario no autenticado');

    const idToken = await user.getIdToken(true);
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${idToken}` });

    try {
      return await firstValueFrom(
        this.http.get<Usuario[]>(this.apiUrl, { headers })
      );
    } catch (error) {
      console.error('Error HTTP:', error);
      throw new Error('Error al cargar usuarios');
    }
<<<<<<< Updated upstream
=======
    /*
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
      throw new Error('Usuario no autenticado');
    }

    const idToken = await user.getIdToken(true);

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${idToken}`
    });
    // console.log('idTOken', idToken);
    // console.log('headers', headers);

    return this.http.get<any[]>(this.apiUrl, { headers });
    */
>>>>>>> Stashed changes
  }
}
