import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AlertService } from '../alert.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  //servizio
  private fb : FormBuilder = inject(FormBuilder);
  private authService : AuthService = inject(AuthService);
  private alertService : AlertService = inject(AlertService);
  private router: Router = inject(Router);

  //fields
  loginForm !: FormGroup ;
  alert = this.alertService.alert$;
  //ritorna un oggetto che contiene tutti i controlli del form

  //metodi
  async login () {
    try{
      this.alertService.setAlert({alertClass: 'pending', message: 'Logging in...'});
      const username = this.loginForm.get('username')?.value;
      const password = this.loginForm.get('password')?.value;
      const loginResult:boolean = await this.authService.login(username, password);
    
        this.alertService.setAlert({alertClass: 'success', message: 'Login Successful'});
        this.router.navigate(['/categories']);

  
    }catch(e){
      console.log(e);
      this.alertService.setAlert({alertClass: 'error', message: 'Invalid Credentials'});
    }
   
  }
  

  get f() { return this.loginForm.controls; }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required]
    });
    this.alertService.clearAlert();
  }
}
