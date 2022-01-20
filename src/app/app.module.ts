import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneralComponent } from './Components/general/general.component';
import { Prueba1Component } from './Components/prueba1/prueba1.component';
import { Prueba2Component } from './Components/prueba2/prueba2.component';

@NgModule({
  declarations: [
    AppComponent,
    GeneralComponent,
    Prueba1Component,
    Prueba2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
