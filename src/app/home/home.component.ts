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
  
<<<<<<< Updated upstream
  async ngOnInit() {
    this.condomini = await this.pbservice.fetchCondominio( );
=======
  condomini!: CondoModel[];
  private async LoadCondo() {
    try {

      this.condomini = await this.CondominioService.getCondomini();
      this.condomini = this.condomini.filter(condo => condo.IDAdmin === this.adminId);
      console.log("davide");      
    }
    catch (error) {
      console.log(error);
    }
>>>>>>> Stashed changes
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
