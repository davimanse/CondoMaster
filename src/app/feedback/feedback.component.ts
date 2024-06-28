import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PocketBaseService } from '../servizi/fetch-records.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  feedbackForm: FormGroup;  // Definisci il FormGroup
  idUtente!: string;
  idAdmin!: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private pocketBaseService: PocketBaseService,
    private authService: AuthService,

  ) {
    // Inizializza il FormGroup con i campi del modulo
    this.feedbackForm = this.fb.group({
      Descrizione: ['', Validators.required],
      Data: ['', Validators.required],
      NomeUtente: ['', Validators.required]
    });
  }

  async ngOnInit(): Promise<void> {
    // Recupera gli ID utente e admin
     this.idUtente = await this.authService.getUtentiId(); // Cambia con il tuo metodo appropriato
  //  this.idAdmin = await this.authService.getAdminId();   // Cambia con il tuo metodo appropriato

    console.log('IdUtente:', this.idUtente, 'IdAdmin:', this.idAdmin);
  }

  onSubmit(): void {
    if (this.feedbackForm.valid) {
      // Aggiungi IdUtente e IdAdmin al feedback
      const feedbackData = {
        ...this.feedbackForm.value,
        IdUtente: this.idUtente,
        IdAdmin: this.idAdmin
      };

      console.log('Dati del form:', feedbackData);
      
      // Invia il feedback al servizio PocketBase
      this.pocketBaseService.addFeedback(feedbackData);

      // Eventualmente, reindirizza l'utente o mostra un messaggio di successo
    } else {
      console.log('Il modulo non è valido');
    }
  }
}
