import { Injectable } from '@angular/core';
<<<<<<< Updated upstream
import { CanActivate, Router } from '@angular/router';
=======
import { CanActivate, Router, UrlTree } from '@angular/router';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Observable } from 'rxjs';
>>>>>>> Stashed changes

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

<<<<<<< Updated upstream
  canActivate(): boolean {
    const isLoggedIn = localStorage.getItem('authToken'); // O usa un AuthService

    if (isLoggedIn) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
=======
  /*canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    const auth = getAuth();

    return new Promise((resolve) => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          resolve(true);
        } else {
          this.router.navigate(['/login']);
          resolve(false);
        }
      });
    });
  }*/
    canActivate(): boolean | UrlTree {
        const auth = getAuth();
        const user = auth.currentUser;
        return user ? true : this.router.createUrlTree(['/login']);
      }
>>>>>>> Stashed changes
}
