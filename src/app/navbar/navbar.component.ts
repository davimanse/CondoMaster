import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
logo: any;
  constructor(private router: Router) { }

  goToLogin() {
    this.router.navigate(['/login']);
  }

}