import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PagesModule } from 'app/pages';
import { CommonModule } from '@angular/common';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule, 
    PagesModule,    
    HttpModule,
    RouterModule.forRoot([],{useHash: true}),   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
