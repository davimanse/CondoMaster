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


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pocketBaseService: PocketBaseService
  ) {}

  async ngOnInit(){
    this.route.params.subscribe(params => {
      this.condominioId = params['condominioId'];
      console.log(this.condominioId, "ID");
    });
    this.appartamenti= await this.pocketBaseService.getAppartamenti(this.condominioId);
    console.log(this.appartamenti);
    
  }
/*
   getnomeUtente(id: string){
    const nome =  this.pocketBaseService.getNomeUtente(id);
    console.log(nome);
    return nome;
  }
  */
}
