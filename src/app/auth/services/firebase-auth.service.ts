import { inject, Injectable } from '@angular/core';
import { getAuth, Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, UserCredential } from 'firebase/auth';
import { app } from '../auth.config';

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {
  private auth: Auth;

  constructor() {
    this.auth = getAuth(app); // Inicializa Firebase Auth
  }

  // Método para registrar usuarios
  register(email: string, password: string): Promise<UserCredential> {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  // Método para iniciar sesión
<<<<<<< Updated upstream
    async login(email: string, password: string): Promise<UserCredential> {
      console.log('firebase-auth.service.ts: login()');
=======
  /*login(email: string, password: string): Promise<UserCredential> {
    return signInWithEmailAndPassword(this.auth, email, password);
  }*/
    async login(email: string, password: string): Promise<UserCredential> {
      // const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
      // return userCredential;
>>>>>>> Stashed changes
      const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
      await userCredential.user.getIdToken(true);  // 💡 Refresca claims
      return userCredential;

    }

  // Método para cerrar sesión
  logout(): Promise<void> {
    return signOut(this.auth);
  }

}

