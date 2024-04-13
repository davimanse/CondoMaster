import { Component, inject } from '@angular/core';
import { OnInit, OnChanges } from '@angular/core';
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
export class EntryComponent implements OnInit, OnChanges{
  
  private router: Router = inject(Router);
  private authService : AuthService = inject(AuthService);
  private pocketBaseService: PocketBaseService =inject(PocketBaseService);
  adminId: string;
  
  adminNome: string | undefined;
  
  
  constructor() { this.adminId=this.authService.getAdminId()}

  ngOnChanges(): void {
    this.adminId = this.authService.getAdminId();
    console.log(this.adminId);
    console.log("ciao");
  }


   ngOnInit(): void {

    
        const adminNameFromStorage = localStorage.getItem('admin');
        if (adminNameFromStorage) {
            this.adminNome = adminNameFromStorage;
        } else {
            this.pocketBaseService.getNomeAdmin(this.adminId).then(adminName => {
                this.adminNome = adminName;
                localStorage.setItem('admin', adminName); // Salva il nome dell'admin nel localStorage
            });
        }
    
    console.log(this.adminNome);
    console.log("ciao");
  }



  route(){
    this.router.navigate(['/home']);
    console.log("ciao");
  }
 

}
