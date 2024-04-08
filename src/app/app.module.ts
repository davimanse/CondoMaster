import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from "./menu/menu.component";
import { HomeComponent } from "./home/home.component";
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatSidenavContent } from '@angular/material/sidenav';


@NgModule({
    declarations: [HomeComponent],
    providers: [],
    bootstrap: [],
    exports: [ MatSidenavModule ],
    imports: [
        BrowserModule,
        HttpClientModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        MenuComponent,
        MatSidenavModule,
        MatSidenavContent
    ]
})
export class AppModule { }
