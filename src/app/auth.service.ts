import { Injectable } from '@angular/core';
import PocketBase from 'PocketBase';
import { BehaviorSubject } from 'rxjs';
import { UserModel } from './models/user-model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  private pb: PocketBase; // Dichiarare pb come proprietà della classe
   adminId!: string;
   utenteId!: string;
  authData: any;
  
  constructor() { 
    this.pb = new PocketBase('http://127.0.0.1:8090'); // Inizializzare pb nel costruttore
    
  } 

  async loginUsers(username: string, password: string) {
    try {
      const authData = await this.pb.collection('utente').authWithPassword(username, password);
      console.log("Accesso effettuato come utente");
      this.utenteId = authData?.record?.id;
      console.log(this.pb.authStore.isValid);
      console.log(this.utenteId);
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
      this.authData=authData;
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
  //registrazione utente
  async register(username: string, email: string, password: string, confirmPassword: string) {
    try {
      const userData = {
        "username": username,
        "email": email,
        "emailVisibility": true,
        "password": password,
        "passwordConfirm": confirmPassword,
        };
    
      console.log("Registering user:", userData);
      // Effettua la registrazione dell'utente
      const response = await this.pb.collection('Utente').create(userData);
      console.log("Utente registrato con successo:", response);
      
      // (opzionale) Invia una richiesta di verifica dell'email
      await this.pb.collection('Utente').requestVerification(email);
      
    } catch (error) {
      console.log("Errore nella registrazione dell'utente:", error);
      throw error; // Rilancia l'errore per gestirlo nel componente di login
    }
  }

  async logout() {
    this.pb.authStore.clear();
  }      
      
    async getAdminId(): Promise<string> {
      this.authData = await this.pb.collection('Admin').authRefresh();
      console.log(this.authData,"X"); 
      this.adminId = this.authData.record.id;
      console.log(this.adminId);
      return this.adminId;
    }
    async getUtentiId(): Promise <string>{
    this.authData = await this.pb.collection('Utente').authRefresh();
    console.log(this.authData,"X"); 
    this.utenteId = this.authData.record.id;
    console.log(this.adminId);
    return this.utenteId;  }
  
  isLoggedIn(): boolean {
  console.log(this.pb.authStore);
    return this.pb.authStore.isValid;
  
  }
  async passwordReset(email:string){
    const a=await this.pb.collection('Utente').requestPasswordReset(email);
    console.log(a);
  }

  authstore(): any{
    return this.pb.authStore;
  }
}

