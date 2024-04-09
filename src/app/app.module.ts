import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from "./menu/menu.component";
import { HomeComponent } from "./home/home.component";
import { MatSidenavContent } from '@angular/material/sidenav';
import { NavbarComponent } from './navbar/navbar.component';




@NgModule({
    declarations: [HomeComponent,NavbarComponent],
    providers: [],
    bootstrap: [],
    imports: [
        BrowserModule,
        HttpClientModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        MenuComponent,
        MatSidenavContent,
    ]
})
export class AppModule { }