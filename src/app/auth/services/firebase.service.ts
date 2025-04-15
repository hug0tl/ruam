import { Injectable } from '@angular/core';
import { initializeApp, FirebaseApp } from 'firebase/app';
import { getAnalytics, Analytics } from 'firebase/analytics';
import { environment } from '../../../environments/environment';
import { getAuth, Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';

  @Injectable({
    providedIn: 'root'
  })
  export class FirebaseService {
    private app: FirebaseApp;
    private auth: Auth;
  
    constructor() {
      this.app = initializeApp(environment.firebase);
      this.auth = getAuth(this.app);
    }
  
    // Getter para Auth
    getAuthInstance(): Auth {
      return this.auth;
    }
  
    // Registro
    async register(email: string, password: string) {
      return await createUserWithEmailAndPassword(this.auth, email, password);
    }
  
    // Login
    async login(email: string, password: string) {
      return await signInWithEmailAndPassword(this.auth, email, password);
    }
  
    // Logout
    async logout() {
      return await signOut(this.auth);
    }
  }
