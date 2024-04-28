import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { EntryComponent } from './entry/entry.component';
import { SpeseComponent } from './spese/spese.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AppartamentiComponent } from './appartamenti/appartamenti.component';
import { IndexUtenteComponent } from './index-utente/index-utente.component';
import { FeedbackAdminComponent } from './feedback-admin/feedback-admin.component';
import { UserGuard } from './servizi/users-guard.service';
import { AdminGuard } from './servizi/admin-guard.service';
import { AccessDeniedComponent } from './access-denied/access-denied.component';


export const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},  
    {path: 'entry', component: EntryComponent, canActivate: [AdminGuard]},
    {path: 'home', component: HomeComponent, canActivate: [AdminGuard]},
    {path: 'spese', component: SpeseComponent, canActivate: [AdminGuard]},
    {path: 'feedback', component: FeedbackComponent, canActivate: [UserGuard]},
    {path: 'condominio/:condominioId', component: AppartamentiComponent, canActivate: [AdminGuard]}, 
    {path: 'Indexutente', component: IndexUtenteComponent, canActivate: [UserGuard]},
    {path: 'feedbackAdmin', component: FeedbackAdminComponent, canActivate: [AdminGuard]},
    { path: 'access-denied', component: AccessDeniedComponent }, // Nuova pagina di accesso negato
    { path: '**', redirectTo: '' } // Rotta di fallback

    


];
