import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.isLoggedIn() && this.authService.authstore().model?.collectionName === 'Utente') {
      return true; // L'utente è loggato e appartiene alla collezione 'Utente'
    } else {
      this.router.navigate(['/login']);
      console.log('Accesso negato');
      return false;
    }
  }
}
