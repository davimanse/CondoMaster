import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { PocketBaseService } from '../servizi/fetch-records.service';
import { AppartModel } from '../models/condo-model';
import {CondoModel } from '../models/condo-model';


import { BrowserModule } from '@angular/platform-browser'; // if _HomeComponent is in the root module
import PocketBase from 'PocketBase';
import { AppModule } from '../app.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-appartamenti',

  templateUrl: './appartamenti.component.html',
  styleUrl: './appartamenti.component.scss'
})
export class AppartamentiComponent {

  private authService: AuthService = new AuthService;
  private router: Router = new Router;
  private pocketBaseService: PocketBaseService = new PocketBaseService;
  appartamenti: AppartModel[] = [];
  constructor(authService: AuthService, router: Router, pocketBaseService: PocketBaseService) {
    this.authService = authService;
    this.router = router;
    this.pocketBaseService = pocketBaseService;

  }

  ngOnInit():void {
    this.LoadApartament();

  }
  async LoadApartament(): Promise<void> {

    this.appartamenti = await this.pocketBaseService.getAppartamenti(id);
    console.log(this.appartamenti);
    console.log(this.appartamenti);
  }

}
