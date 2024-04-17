import { Injectable } from '@angular/core';
import PocketBase from 'PocketBase';
import { BehaviorSubject } from 'rxjs';
import { UserModel } from './models/user-model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  private pb: PocketBase; // Dichiarare pb come proprietà della classe
  private adminId!: string;
  private userId!: string;

  constructor() { 
    this.pb = new PocketBase('http://127.0.0.1:8090'); // Inizializzare pb nel costruttore
  } 

  async loginUsers(username: string, password: string) {
    try {
      const authData = await this.pb.collection('utente').authWithPassword(username, password);
      console.log("Accesso effettuato come utente");
      this.userId = authData?.record?.id;
      console.log(this.pb.authStore.isValid);
      console.log(this.userId);
      console.log(this.pb.authStore.token);
    } catch (error) {
      console.log("Errore nell'accesso come utente:", error);
    }
    return true;
  }

  async login(username: string, password: string) {
    try {
      // Effettua l'autenticazione come amministratore
      const authData = await this.pb.collection('Admin').authWithPassword(username, password);
      this.adminId = authData?.record?.id;
      console.log("Accesso effettuato come amministratore");
    } catch (error) {
      // Se l'autenticazione come amministratore fallisce, prova come utente
      console.log("Accesso come amministratore fallito, prova come utente");
      return false;
      
    }
    console.log(this.pb.authStore.isValid);
    console.log(this.pb.authStore.token);
    return true;
  }

  async logout() {
    this.pb.authStore.clear();
  }      
      
  getAdminId(): string {
    return this.adminId;
  }
  returnUsersId(): string{
    return this.userId;
  }
  
  isLoggedIn(): boolean {
    return this.pb.authStore.isValid;
  }
}
