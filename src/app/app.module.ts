import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneralComponent } from './Components/general/general.component';
import { Prueba1Component } from './Components/prueba1/prueba1.component';
import { Prueba2Component } from './Components/prueba2/prueba2.component';
import {CalendarModule} from 'primeng/calendar';
import {ListboxModule} from 'primeng/listbox';
import {SidebarModule} from 'primeng/sidebar';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import {ChipsModule} from 'primeng/chips';
import { SideNavComponent } from './Components/side-nav/side-nav.component';
import { OficinasComponent } from './Components/oficinas/oficinas.component';
import { OfisComponent } from './Components/ofis/ofis.component';
import { Ofi51Component } from './Components/ofis/ofi51/ofi51.component';


@NgModule({
  declarations: [
    AppComponent,
    GeneralComponent,
    Prueba1Component,
    Prueba2Component,
    SideNavComponent,
    OficinasComponent,
    OfisComponent,
    Ofi51Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule,
    ListboxModule,
    SidebarModule,
    ChipsModule,
    NgxMaterialTimepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
