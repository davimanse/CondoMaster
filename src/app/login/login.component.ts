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
  registerForm!: FormGroup;
  isLoginForm: boolean = true;
  //ritorna un oggetto che contiene tutti i controlli del form

  //metodi
  async login () {
    try{
      this.alertService.setAlert({alertClass: 'pending', message: 'Logging in...'});
      const username = this.loginForm.get('username')?.value;
      const password = this.loginForm.get('password')?.value;
      const loginResult:boolean = await this.authService.login(username, password);
      if(loginResult)
      { this.router.navigate(['/entry']);}
      else{
        const username = this.loginForm.get('username')?.value;
        const password = this.loginForm.get('password')?.value;
        const loginResult:boolean = await this.authService.loginUsers(username, password);
        if(loginResult)
        { 
         this.router.navigate(['/IndexUtente']);
         console.log("login utente")
        }
      }

  
    }catch(e){
      console.log(e);
      this.alertService.setAlert({alertClass: 'error', message: 'Invalid Credentials'});
    }
   
  }


  
  register() {
  }

  get f() { return this.loginForm.controls; }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
    this.alertService.clearAlert();
  }
  toggleForm() {
    this.isLoginForm = !this.isLoginForm;
  }
}
