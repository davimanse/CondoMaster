import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { PocketBaseService } from '../servizi/fetch-records.service';
import { CommonModule } from '@angular/common';
import { inject } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  condoService = inject(PocketBaseService);
  condomini !: any;
  constructor(private authService: AuthService, private router: Router, private pbservice:PocketBaseService) { }
  
  
  private async loadCondomini() {
    try{
      this.condomini = await this.condoService.fetchCondominio();
    }catch(e){
      console.log(e);
    }

  }
 ngOnInit():void{
   this.loadCondomini();
  }


  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  
}
