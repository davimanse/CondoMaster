import { Injectable } from '@angular/core';
import PocketBase from 'PocketBase';
import { AuthService } from '../auth.service'; // Importa il tuo servizio di autenticazione


@Injectable({
  providedIn: 'root',
})
export class PocketBaseService {
  private pb: any;

  constructor(private authService: AuthService) { // Inietta il servizio di autenticazione
 
  }
  

   idAdmin = this.authService.getID(); // Ottieni l'ID dell'utente autenticato
  
  

  


  async fetchCondominio() {
  
    this.pb = new PocketBase('http://127.0.0.1:8090');
    const record = await this.pb.collection('Condominio').getFullList({IDAdmin:this.idAdmin}, {
      expand: 'Nome, Indirizzo, nAppartamenti'
  });
  
     
  console.log(record);
  return record;
    
    
 }
    
}

