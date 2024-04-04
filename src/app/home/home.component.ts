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

  

  constructor(private pocketBaseService: PocketBaseService) { }
  
  condomini!: CondoModel[];// Inizializza un array vuoto per i dati dei condomini
  private async LoadCondo() {
    try {
      this.condomini = await this.CondominioService.getCondomini();
    
    }
    catch (error) {
      console.log(error);
    }
  }


  ngOnInit():void {
    this.LoadCondo();  
  }


  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  
}
