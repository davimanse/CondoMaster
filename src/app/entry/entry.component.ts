import { Component, inject } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { PocketBaseService } from '../servizi/fetch-records.service';
import {CondoModel } from '../models/condo-model';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrl: './entry.component.scss'
})
export class EntryComponent implements OnInit{
  
  private router: Router = inject(Router);
  private authService : AuthService = inject(AuthService);
  adminId: string;
  utente: any;
  constructor(private pocketBaseService: PocketBaseService,) { this.adminId=this.authService.getAdminId()}


  ngOnInit(): void {
    this.adminId = this.authService.getAdminId();
    //voglio prendere il nome dell admin 
    this.pocketBaseService.getAdminName(this.adminId).then((records) => {
      this.utente = [records];
      console.log(this.utente);
    }
    );
  

  }


  route(){
    this.router.navigate(['/home']);
    console.log("ciao");
  }
 

}
