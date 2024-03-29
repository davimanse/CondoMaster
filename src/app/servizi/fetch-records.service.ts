import { Injectable } from '@angular/core';
import PocketBase from 'PocketBase';
import { CondoListModel } from '../models/condo-model';

@Injectable({
  providedIn: 'root',
})
export class PocketBaseService {
  private pb: any;

  constructor() {
  }

  async fetchCondominio(){
   const pb = new PocketBase('http://127.0.0.1:8090');
      const records = await pb.collection('Condominio').getFullList({
        sort: '-created',
    });
    console.log(records);

    return records;
    
 
  }
}
