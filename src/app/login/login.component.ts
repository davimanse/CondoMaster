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
  styleUrls: ['./login.component.scss'] // Correzione di 'styleUrl' a 'styleUrls'
})
export class LoginComponent implements OnInit {
  // Servizi
  private fb: FormBuilder = inject(FormBuilder);
  private authService: AuthService = inject(AuthService);
  private alertService: AlertService = inject(AlertService);
  private router: Router = inject(Router);

  // Fields
  loginForm!: FormGroup;
  registerForm!: FormGroup;
  forgotPasswordForm!: FormGroup; // Nuovo modulo per il recupero della password
  alert = this.alertService.alert$;
  isLoginForm: boolean = true;
  isForgotPassword: boolean = false; // Flag per la schermata di recupero password

  // Metodi
  async login() {
    try {
      this.alertService.setAlert({ alertClass: 'pending', message: 'Logging in...' });
      const username = this.loginForm.get('username')?.value;
      const password = this.loginForm.get('password')?.value;
      const loginResult: boolean = await this.authService.login(username, password);

      if (loginResult) {
        this.router.navigate(['/entry']);
      } else {
        // Secondo tentativo di login
        const loginResultUtente: boolean = await this.authService.loginUsers(username, password);
        if (loginResultUtente) {
          this.router.navigate(['/Indexutente']);
          console.log("Login utente");
        }
      }
    } catch (e) {
      console.error(e);
      this.alertService.setAlert({ alertClass: 'error', message: 'Invalid Credentials' });
    }
  }

  expandRegisterContainer() {
    const registerContainer = document.getElementById('registerContainer');
    if (registerContainer) {
      registerContainer.style.height = '450px';
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

      // Registrazione
      await this.authService.register(username, email, password, confirmPassword);

      // Reindirizza alla pagina di login dopo la registrazione
      this.router.navigate(['/login']);
    } catch (error) {
      console.error("Error during registration:", error);
      this.alertService.setAlert({ alertClass: 'error', message: 'Registration failed' });
    }
  }

  get f() {
    return this.loginForm.controls;
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })
    ;

    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });

    // Inizializzazione del modulo di recupero password
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });

    this.alertService.clearAlert();
  }

  toggleForm() {
    this.isLoginForm = !this.isLoginForm;
    this.isForgotPassword = false; // Resetta il flag per il recupero della password
  }

  forgotPassword() {
    this.isForgotPassword = true; // Attiva la visualizzazione del modulo di recupero
    this.isLoginForm = false; // Disattiva la visualizzazione del modulo di login
  }

  async sendResetPassword() {
    if (this.forgotPasswordForm.valid) {
      const email = this.forgotPasswordForm.get('email')?.value;
      
      console.log("Sending reset password email to:", email);
      this.alertService.setAlert({ alertClass: 'pending', message: `Sending password reset to ${email}...` });

      // Simulazione di invio email di reset della password
      await this.authService.passwordReset(email);

      this.alertService.setAlert({ alertClass: 'success', message: `Email di reset inviata a ${email}` });
    }
  }

  cancelForgotPassword() {
    this.isForgotPassword = false; // Disattiva la visualizzazione del modulo di recupero
    this.isLoginForm = true; // Riattiva il modulo di login
  }
}
