import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CampoControlErroComponent } from './cadastro/campo-control-erro/campo-control-erro.component';
import { NavComponent } from './nav/nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LimitDigitsDirective } from './diretivas/limit-digits.directive';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    CampoControlErroComponent,
    NavComponent,
    DashboardComponent,
    LimitDigitsDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule, 
  
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
