import { Component, OnInit, inject } from '@angular/core';
import { PocketBaseService } from '../servizi/fetch-records.service';
import { CommonModule } from '@angular/common';
import { CondoListModel, CondoModel } from '../models/condo-model';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser'; // if _HomeComponent is in the root module

import PocketBase from 'PocketBase';
import { AppModule } from '../app.module';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  private authService : AuthService = inject(AuthService);
  private router: Router = inject(Router);
  private CondominioService = inject(PocketBaseService);
  adminId: string | null = null;
  

  constructor(private pocketBaseService: PocketBaseService) { }
  
  condomini!: CondoModel[];
  private async LoadCondo() {
    try {

      this.condomini = await this.CondominioService.getCondomini();
      this.condomini = this.condomini.filter(condo => condo.IDAdmin === this.adminId);    
        
    }
    catch (error) {
      console.log(error);
    }
  }


  ngOnInit():void {
    this.LoadCondo();  
    this.adminId=this.authService.getAdminId();
  }

  async deleteCondo(id:string) {
    this.pocketBaseService.deleteCondo(id);
    this.condomini = this.condomini.filter(condo => condo.id !== id);
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  
}
