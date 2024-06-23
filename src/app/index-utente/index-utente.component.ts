import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Spesa } from '../models/spesa-model';
import { PocketBaseService } from '../servizi/fetch-records.service';

@Component({
  selector: 'app-index-utente',
  templateUrl: './index-utente.component.html',
  styleUrl: './index-utente.component.scss'
})
export class IndexUtenteComponent implements OnInit{
  spese: Spesa[] = [];

  constructor(private pocketBaseService: PocketBaseService) {}

    async ngOnInit(): Promise<void> {
    await this.loadSpese();
    }
    
    async loadSpese(): Promise<void> {
      this.spese = await this.pocketBaseService.getSpese();
      console.log(this.spese);
    }
}
