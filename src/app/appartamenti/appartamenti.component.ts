import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { PocketBaseService } from '../servizi/fetch-records.service';

@Component({
  selector: 'app-appartamenti',
  standalone: true,
  imports: [],
  templateUrl: './appartamenti.component.html',
  styleUrl: './appartamenti.component.scss'
})
export class AppartamentiComponent {

  private authService: AuthService = new AuthService;
  private router: Router = new Router;
  private pocketBaseService: PocketBaseService = new PocketBaseService;
  constructor(){};

}
