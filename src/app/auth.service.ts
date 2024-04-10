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
  private userSubject: BehaviorSubject<UserModel | null> = new BehaviorSubject<UserModel | null>(null);
  user$ = this.userSubject.asObservable();

  async login(username: string, password: string) {
    let authData: any;

    // Effettua l'autenticazione sia come amministratore che come utente
    try {
      authData = await this.pb.collection('Admin').authWithPassword(username, password);
      this.adminId = authData?.record?.id;
    } catch (error) {
      // Se l'autenticazione come amministratore fallisce, prova come utente
      authData = await this.pb.collection('Utenti').authWithPassword(username, password);
    }

    // Aggiorna lo stato dell'utente autenticato
    this.userSubject.next({ isValid: this.pb.authStore.isValid, username: this.pb.authStore.model?.['email'] });

    console.log(authData);
    console.log(this.pb.authStore.isValid);
    console.log(this.pb.authStore.token);

    return true;
  }

  async logout() {
    this.pb.authStore.clear();
  }      
      
  updateUserSubject() {
    this.userSubject.next({ isValid: this.pb.authStore.isValid, username: this.pb.authStore.model?.['email'] });
  }

  getAdminId(): string {
    return this.adminId;
  }
  
  isLoggedIn(): boolean {
    return this.pb.authStore.isValid;
  }

  constructor() { 
    this.pb = new PocketBase('http://127.0.0.1:8090'); // Inizializzare pb nel costruttore
  } 
}
