import { Injectable } from '@angular/core';
import PocketBase from 'PocketBase';
import { CondoListModel, CondoModel } from '../models/condo-model';

@Injectable({
  providedIn: 'root',
})
export class PocketBaseService {

  async getCondomini(): Promise<CondoModel[]> {
    const pb = new PocketBase('http://127.0.0.1:8090');
    const records:CondoModel[] = await pb.collection('Condominio').getFullList({
      sort:'-created',
    });console.log(records);
    console.log("sopra")
    return records;
  }
  constructor() {}
  async addCondo(Condo:CondoModel) {

    const pb = new PocketBase('http://127.0.0.1:8090');
    const response: CondoModel = await pb.collection('Condominio').create(Condo);
    return response;
  }

}