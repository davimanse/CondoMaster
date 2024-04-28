import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.isLoggedIn() && this.authService.authstore().model?.collectionName === 'Admin') {
      return true; // L'utente è loggato e appartiene alla collezione 'Admin'
    } else {
      this.router.navigate(['/access-denied']); // Reindirizza all'accesso negato
      console.log('Accesso negato');
      return false; // Reindirizza alla pagina di login se non è loggato o non è un amministratore
    }
  }
}
