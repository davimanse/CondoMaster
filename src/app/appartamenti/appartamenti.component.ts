import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PocketBaseService } from '../servizi/fetch-records.service';
import { AppartModel } from '../models/condo-model';

@Component({
  selector: 'app-appartamenti',
  templateUrl: './appartamenti.component.html',
  styleUrls: ['./appartamenti.component.scss']
})
export class AppartamentiComponent implements OnInit {
  condominioId!: string;
  appartamenti: AppartModel[] = [];
  nuovoAppartamento = {
    Piano: 0,
    metriQuadri: 0,
    Millesimi: 0,
    IDCondominio: ''
  };
  modalVisible = false;  // Variabile per gestire la visibilità del modal

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pocketBaseService: PocketBaseService
  ) {}

  async ngOnInit() {
    this.route.params.subscribe(params => {
      this.condominioId = params['condominioId'];
    });
    await this.loadAppartamenti();
  }

  async loadAppartamenti() {
    this.appartamenti = await this.pocketBaseService.getAppartamenti(this.condominioId);
  }

  openModal() {
    this.modalVisible = true;  // Mostra il modal
  }

  closeModal() {
    this.modalVisible = false;  // Nasconde il modal
  }

  async addAppartamento() {
    this.nuovoAppartamento.IDCondominio = this.condominioId;
    console.log("dati da aggiungere", this.nuovoAppartamento);
    await this.pocketBaseService.addAppartamento(this.nuovoAppartamento);
    await this.loadAppartamenti();
    this.nuovoAppartamento = { Piano: 0, metriQuadri: 0, Millesimi: 0, IDCondominio: '' };
    this.closeModal();  // Chiudi il modal
  }

  async deleteAppartamento(id: string | undefined) {
    if (id) {
      await this.pocketBaseService.deleteAppartamento(id);
      await this.loadAppartamenti();
    } else {
      console.error("ID non valido per la cancellazione");
    }
  }
}
