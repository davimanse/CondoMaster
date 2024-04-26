import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.scss'
})
export class FeedbackComponent {
  newFeedback: FormGroup;

  constructor(private fb: FormBuilder) {
    // Inizializza il form con i FormControls
    this.newFeedback = this.fb.group({
      nomeUtente: ['', Validators.required],
      data: ['', Validators.required],
      Descrizione: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  // Metodo per gestire il submit del form
  onSubmit(): void {
    if (this.newFeedback.valid) {
      const formData = this.newFeedback.value;
      console.log('Dati del form:', formData);

      // Puoi eseguire ulteriori operazioni qui, come inviare i dati a un servizio
    } else {
      console.log('Il modulo non è valido');
    }
  }
}
