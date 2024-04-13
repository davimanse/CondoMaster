import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './servizi/auth-guard.guard';
import { EntryComponent } from './entry/entry.component';
import { SpeseComponent } from './spese/spese.component';


export const routes: Routes = [
    {path: '', redirectTo: 'entry', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},  
    {path: 'entry', component: EntryComponent, canActivate: [AuthGuard]},
    {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
    {path: 'spese', component: SpeseComponent, canActivate: [AuthGuard]},
    


];
