import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { PocketBaseService } from '../servizi/fetch-records.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router, private pbservice:PocketBaseService) { }
  data : any;
  async ngOnInit() {
    this.data = await this.pbservice.fetchCondominio();
    console.log(this.data);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
