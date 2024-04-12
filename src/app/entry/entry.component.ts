import { Component, inject } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { PocketBaseService } from '../servizi/fetch-records.service';
import {CondoModel } from '../models/condo-model';
import { RecordModel } from 'PocketBase';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrl: './entry.component.scss'
})
export class EntryComponent implements OnInit{
  
  private router: Router = inject(Router);
  private authService : AuthService = inject(AuthService);
  private pocketBaseService: PocketBaseService =inject(PocketBaseService);
  adminId: string;
  
  utente: any;
  adminNome: Promise<string> | undefined;
  
  
  constructor() { this.adminId=this.authService.getAdminId()}


  ngOnInit(): void {
    this.adminId = this.authService.getAdminId();
    console.log(this.adminId);
    this.adminNome = this.pocketBaseService.getNomeAdmin(this.adminId);
    console.log(this.adminNome);
    console.log("ciao");
  }


  route(){
    this.router.navigate(['/home']);
    console.log("ciao");
  }
 

}
