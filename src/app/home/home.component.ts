import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { PocketBaseService } from '../servizi/fetch-records.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent implements OnInit {
  condomini: any;

  constructor(
    private authService: AuthService, 
    private router: Router, 
    private pbservice: PocketBaseService
  ) {}
  
  async ngOnInit() {
    this.condomini = await this.pbservice.fetchCondominio( );
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
