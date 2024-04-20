import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './servizi/auth-guard.guard';
import { EntryComponent } from './entry/entry.component';
import { SpeseComponent } from './spese/spese.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AppartamentiComponent } from './appartamenti/appartamenti.component';
import { IndexUtenteComponent } from './index-utente/index-utente.component';


export const routes: Routes = [
    {path: '', redirectTo: 'entry', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},  
    {path: 'entry', component: EntryComponent, canActivate: [AuthGuard]},
    {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
    {path: 'spese', component: SpeseComponent, canActivate: [AuthGuard]},
    {path: 'feedback', component: FeedbackComponent, canActivate: [AuthGuard]},
    {path: 'condominio/:condominioId', component: AppartamentiComponent, canActivate: [AuthGuard]}, 
    {path: 'Indexutente', component: IndexUtenteComponent},

    


];
