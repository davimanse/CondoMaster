import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-navbar-utente',
  templateUrl: './navbar-utente.component.html',
  styleUrl: './navbar-utente.component.scss'
})
export class NavbarUtenteComponent {
  constructor(private router: Router) { }
  private authService : AuthService = inject(AuthService);

  goToLogin() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  gotoentry()
  {
    this.router.navigate(['/entry']);
  }
  gotohome()
  {
    this.router.navigate(['/Indexutente']);
  }
  gotospese()
  {
    this.router.navigate(['/spese']);
  }
  gotofeedback()
  {
    this.router.navigate(['/feedback']);
  }
}
