import { Injectable } from '@angular/core';
import PocketBase from 'PocketBase';
import { AppartModel, CondoListModel, CondoModel } from '../models/condo-model';

@Injectable({
  providedIn: 'root',
})
export class PocketBaseService {
  setCondoId(condominioId: string) {

  }

  constructor() { }

  async getCondomini(): Promise<CondoModel[]> {
    const pb = new PocketBase('http://127.0.0.1:8090');
    const records:CondoModel[] = await pb.collection('Condominio').getFullList({
      sort:'-created',
    });console.log(records);
    console.log("sopra")
    return records;
  }
   //funzione per prendere il nome dell admin

  async addCondo(data: { Nome: string, Indirizzo: string, nAppartamenti: number, IDAdmin: string }) {
    const pb = new PocketBase('http://127.0.0.1:8090');
    const response: CondoModel = await pb.collection('Condominio').create(data);
    return response;
  }
  
  
  async deleteCondo(id:string){
    const pb = new PocketBase('http://127.0.0.1:8090');
    await pb.collection('Condominio').delete(id);
    
  }

  async getNomeAdmin(id: string){
    const pb = new PocketBase('http://127.0.0.1:8090');
    const record = await pb.collection('Admin').getOne(id, {
        expand: 'username',
    });
    const records = record['username'];
    return records;
}

async getAppartamenti(id: string): Promise<AppartModel[]> {
  const pb = new PocketBase('http://127.0.0.1:8090');
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

async UpdateCondo(id:string, data: { Nome: string, Indirizzo: string, nAppartamenti: number, IDAdmin: string })
{

  const pb = new PocketBase('http://127.0.0.1:8090');
  const record = await pb.collection('Condominio').update(id, data);

}


}
