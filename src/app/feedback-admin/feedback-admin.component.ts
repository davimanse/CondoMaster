import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PocketBaseService } from '../servizi/fetch-records.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-feedback-admin',
  templateUrl: './feedback-admin.component.html',
  styleUrl: './feedback-admin.component.scss'
})
export class FeedbackAdminComponent implements OnInit{
    feedback:any;
    adminId!: string;

    async ngOnInit() {
      // Ottieni l'ID dell'admin corrente
      this.adminId = await this.authService.getAdminId();
      console.log("Admin ID:", this.adminId);
    
      // Ottieni tutti i feedback
      const allFeedback = await this.pocketBaseService.getFeedback();
      console.log("Tutti i feedback:", allFeedback);
    
      // Filtra i feedback per includere solo quelli con IdAdmin uguale a adminId
       //
       
       this.feedback = allFeedback;
    
      console.log("Feedback filtrato:", this.feedback);
    }
    

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private pocketBaseService: PocketBaseService
  ) {}

}
