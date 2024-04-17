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

         this.router.navigate(['/Indexutente']);
         console.log("login utente")
        }
      }

  
    }catch(e){
      console.log(e);
      this.alertService.setAlert({alertClass: 'error', message: 'Invalid Credentials'});
    }
   
  }


  
  async register() {
    try {
      this.alertService.setAlert({ alertClass: 'pending', message: 'Registering...' });
      const email = this.registerForm.get('email')?.value;
      const username = this.registerForm.get('username')?.value;
      const password = this.registerForm.get('password')?.value;
      const confirmPassword = this.registerForm.get('confirmPassword')?.value;
      
      if (password !== confirmPassword) {
        this.alertService.setAlert({ alertClass: 'error', message: 'Passwords do not match' });
        return;
      }

      console.log("Registering user:", username, email, password, confirmPassword);
      
      // Chiamata per registrare l'utente
      await this.authService.register(username, email, password, confirmPassword);


      // Reindirizza l'utente alla pagina di ingresso o a un'altra pagina appropriata
      this.router.navigate(['/login']);
      
    } catch (error) {
      console.error("Error during registration:", error);
      this.alertService.setAlert({ alertClass: 'error', message: 'Registration failed' });
    }
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
