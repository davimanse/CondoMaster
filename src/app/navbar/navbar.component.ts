import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
logo: any;
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
    this.router.navigate(['/home']);
  }
  gotospese()
  {
    this.router.navigate(['/spese']);
  }
  gotofeedback()
  {
    this.router.navigate(['/feedbackAdmin']);
  }
}