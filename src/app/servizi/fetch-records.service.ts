import { Injectable } from '@angular/core';
import PocketBase from 'PocketBase';

@Injectable({
  providedIn: 'root',
})
export class PocketBaseService {
  private pb: any;

  constructor() {
    this.pb = new PocketBase('http://127.0.0.1:8090');
  }

  async fetchCondominio() {
   
      const records = await this.pb.collection('Condominio').getOne('h27ran5a8xkcsxi',{
          extends: "Nome,Indirizzo,nAppartamenti",
      });
      return records;
 
  }
}
