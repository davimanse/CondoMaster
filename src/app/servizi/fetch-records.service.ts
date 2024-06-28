import { Injectable } from '@angular/core';
import PocketBase from 'PocketBase';
import { AppartModel, CondoListModel, CondoModel } from '../models/condo-model';
import { Spesa } from '../models/spesa-model';

const url = 'https://lips-them.pockethost.io/'
@Injectable({
  providedIn: 'root',
})
export class PocketBaseService {
  setCondoId(condominioId: string) {

  }

  constructor() { }

  async getSpese(): Promise<Spesa[]> {
    const pb = new PocketBase(url);
    const records:Spesa[] = await pb.collection('Spesa').getFullList({
      sort:'-created',
    });
     console.log(records);
    return records;
  }

  async getCondomini(): Promise<CondoModel[]> {
    const pb = new PocketBase(url);
    const records:CondoModel[] = await pb.collection('Condominio').getFullList({
      sort:'-created',
    });
    console.log(records);
    console.log("sopra")
    return records;
  }
  async getFeedback(): Promise<any> {
    const pb = new PocketBase(url);
    const records = await pb.collection('Feedback').getFullList({
      sort:'-created',
    });
    return records;

  }
  async addFeedback(data: { Descrizione:string, Data:Date, IdAdmin: string, IdUtente: string, Stato:string, NomeUtente: string }) {
    const pb = new PocketBase(url);
    console.log("VALORI DA AGGIUNGERE", data);
  
  const record = await pb.collection('Feedback').create(data);

  }
  async addCondo(data: { Nome: string, Indirizzo: string, nAppartamenti: number, IDAdmin: string }) {
    const pb = new PocketBase(url);
    const response: CondoModel = await pb.collection('Condominio').create(data);
    return response;
  }
  
  async addAppartamento(data: { Piano: number, metriQuadri: number, Millesimi: number,IDCondominio: string }) {
    const pb = new PocketBase(url);
    const response: CondoModel = await pb.collection('Appartamento').create(data);
    return response;
  }
  
  async deleteAppartamento(id:string){
    const pb = new PocketBase(url);
    await pb.collection('Appartamento').delete(id);
    
  }

  
  async deleteCondo(id:string){
    const pb = new PocketBase(url);
    await pb.collection('Condominio').delete(id);
    
  }

  async getNomeAdmin(id: string){
    const pb = new PocketBase(url);
    const record = await pb.collection('Admin').getOne(id, {
        expand: 'username',
    });
    const records = record['username'];
    return records;
}
async getNomeUtente(id: string) : Promise<string>{
  const pb = new PocketBase(url);
  const record = await pb.collection('Utente').getOne(id, {
      expand: 'username',
  });
  const records = record['username'];
  return records;
}

async getAppartamenti(id: string): Promise<AppartModel[]> {
  const pb = new PocketBase(url);
  const filter = `IDCondominio="${id}"`; // Assicurati di utilizzare le virgolette se l'ID è una stringa
  try {
    const records:AppartModel[] =  await pb.collection('Appartamento').getFullList({
      filter: filter,
    });
    console.log("sopra")
    console.log(records);
    return records;
  } catch (error) {
    console.error("Errore durante il recupero degli appartamenti:", error);
    throw error;
  }
}

async UpdateCondo(id:string, data: { Nome: string, Indirizzo: string, nAppartamenti: number })
{

  const pb = new PocketBase(url);
  const record = await pb.collection('Condominio').update(id, data);
  console.log(record);

}


}
