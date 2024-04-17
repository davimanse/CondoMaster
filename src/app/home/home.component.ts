import { Component, OnInit, inject } from '@angular/core';
import { PocketBaseService } from '../servizi/fetch-records.service';
import {CondoModel } from '../models/condo-model';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser'; // if _HomeComponent is in the root module
import PocketBase from 'PocketBase';
import { AppModule } from '../app.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent implements OnInit {
  
  
  private authService: AuthService;
  private router: Router;
  private pocketBaseService: PocketBaseService;
  adminId: string;
  condomini: CondoModel[] = [];
  nuovoCondominio = {
    Nome: '',
    Indirizzo: '',
    nAppartamenti: 0,
    IDAdmin: '',
  };
  showModal = false;

  constructor(authService: AuthService, router: Router, pocketBaseService: PocketBaseService) {
    this.authService = authService;
    this.router = router;
    this.pocketBaseService = pocketBaseService;
    this.adminId = this.authService.getAdminId();
  }

  ngOnInit(): void {
    // Recupera i dati dal localStorage al caricamento della pagina
    this.adminId = this.authService.getAdminId();
    
    const savedData = localStorage.getItem('condomini');
    if (savedData) {
      this.condomini = JSON.parse(savedData);
    } else {
      this.LoadCondo();
    }
  }
  ngOnChange()
  {
    this.LoadCondo();
    const savedData = localStorage.getItem('condomini');
    if (savedData) {
      this.condomini = JSON.parse(savedData);
    } else {
      this.LoadCondo();
    }
  } 
   navigateToCondominio(condominioId: string) {
    this.router.navigate(['/condominio', condominioId]);
  }

  async LoadCondo(): Promise<void> {
    this.condomini = await this.pocketBaseService.getCondomini();
    this.condomini = this.condomini.filter(
      condo => condo.IDAdmin === this.adminId
    );
    // Salva i dati nel localStorage dopo averli ottenuti dal servizio
    localStorage.setItem('condomini', JSON.stringify(this.condomini));
  }

  async deleteCondo(id: string): Promise<void> {
    this.nuovoCondominio.IDAdmin = this.adminId;
    this.pocketBaseService.deleteCondo(id);
    this.condomini = this.condomini.filter(condo => condo.id !== id);
    // Salva i dati nel localStorage dopo l'eliminazione
    localStorage.setItem('condomini', JSON.stringify(this.condomini));
  }

  async aggiungiCondominio(): Promise<void> {
    this.nuovoCondominio.IDAdmin = this.adminId;
    console.log(this.nuovoCondominio);
    this.pocketBaseService.addCondo(this.nuovoCondominio);
    this.condomini = await this.pocketBaseService.getCondomini();
    this.closeModal();
    // Salva i dati nel localStorage dopo l'aggiunta di un nuovo condominio
    localStorage.setItem('condomini', JSON.stringify(this.condomini));
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    console.log(this.nuovoCondominio);
    this.resetForm();
  }

  resetForm() {
    this.nuovoCondominio = {
      Nome: '',
      Indirizzo: '',
      nAppartamenti: 0,
      IDAdmin: '',
    };
  }
  redirectToAppartamenti(condominioId: string) {
    this.pocketBaseService.setCondoId(condominioId);
    this.router.navigate(['/appartamenti', condominioId]);
  }
}
