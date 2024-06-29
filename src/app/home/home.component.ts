import { Component, OnInit, inject } from '@angular/core';
import { PocketBaseService } from '../servizi/fetch-records.service';
import {CondoModel } from '../models/condo-model';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser'; // if _HomeComponent is in the root module

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
  condomini: CondoModel[] = [];
  
  nuovoCondominio = {
    Nome: '',
    Indirizzo: '',
    nAppartamenti: 0,
    IDAdmin: '',
  };
  showModal = false;
  showUpdateModal= false;
  iddelcondominiodamodificare!:string;
  adminId!: any;

  constructor(authService: AuthService, router: Router, pocketBaseService: PocketBaseService) {
    this.authService = authService;
    this.router = router;
    this.pocketBaseService = pocketBaseService;

  }

   async ngOnInit() {
   
    const adminIdPromise = this.authService.getAdminId();
    this.adminId = await adminIdPromise; // Attendiamo che la Promise si risolva
    console.log("Admin ID:", this.adminId);
      this.LoadCondo();

      /*
      const a= this.authService.authstore();
      console.log("store",a);
  */
  }
  ngOnChange()
  {
      this.LoadCondo();
    
    
  } 
  
   navigateToCondominio(condominioId: string) {
    this.router.navigate(['/condominio', condominioId]);
  }
  
  async LoadCondo(): Promise<void> {

    this.condomini = await this.pocketBaseService.getCondomini();
    console.log(this.condomini);
    
    this.condomini = this.condomini.filter(
      condo => { 

        console.log(condo.IDAdmin, this.adminId)
        return condo.IDAdmin === this.adminId 
      }
    );
    
    console.log(this.condomini);
  }

  async deleteCondo(id: string): Promise<void> {
    this.nuovoCondominio.IDAdmin = this.adminId;
    this.pocketBaseService.deleteCondo(id);
    this.condomini = this.condomini.filter(condo => condo.id !== id);

  }

  async aggiungiCondominio(): Promise<void> {
    this.openModal();
    this.nuovoCondominio.IDAdmin = this.adminId;
    console.log(this.nuovoCondominio);
    this.pocketBaseService.addCondo(this.nuovoCondominio);
    this.condomini = await this.pocketBaseService.getCondomini();
    this.closeModal();
    window.location.reload();

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

 
  closeUpdateModal(){

    this.showUpdateModal = false;
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
  openUpdateModal(id: string) {
    this.showUpdateModal = true;
    // Imposta l'ID del condominio da modificare
    this.iddelcondominiodamodificare = id;
  }
  
  async UpdateCondominio(): Promise<void> {
    // Estrai l'ID dal condominio da modificare
    const idCondominio = this.iddelcondominiodamodificare;
  
    // Prepara i dati del condominio aggiornati (se necessario)
    // In questo caso, supponiamo di aggiornare solo uno dei campi (es. Nome)
    const condominioDaModificare = {
      Nome: this.nuovoCondominio.Nome,
      Indirizzo: this.nuovoCondominio.Indirizzo,
      nAppartamenti: this.nuovoCondominio.nAppartamenti,
    };
  
    console.log("ID Condominio da modificare:", idCondominio);
    console.log("Dati da modificare:", condominioDaModificare);
  
    // Chiamata al servizio per aggiornare il condominio
    await this.pocketBaseService.UpdateCondo(idCondominio, condominioDaModificare);
  
    // Aggiornamento della lista dei condomini dopo la modifica
    this.condomini = await this.pocketBaseService.getCondomini();
    window.location.reload();

    // Chiusura del modal di modifica dopo l'aggiornamento
    this.closeUpdateModal();
  }
    
}
