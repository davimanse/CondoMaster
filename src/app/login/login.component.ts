import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { OnInit } from '@angular/core';

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

  //fields
  loginForm !: FormGroup ;
  //ritorna un oggetto che contiene tutti i controlli del form

  //metodi
  login () {
    const username = this.loginForm.get('username')?.value;
    const password = this.loginForm.get('password')?.value;
    alert(username + ' ' + password);
  }


  get f() { return this.loginForm.controls; }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }
}
