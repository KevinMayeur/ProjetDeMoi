import { PageConnexionComponent } from './PageConnexion/page-connexion.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InscriptionComponent } from './PageConnexion/inscription/inscription.component';
import { HomeComponent } from './PageConnexion/home/home.component';
import { ErreurComponent } from './PageConnexion/erreur/erreur.component';

@NgModule({
  declarations: [
    AppComponent,
    PageConnexionComponent,
    InscriptionComponent,
    HomeComponent,
    ErreurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
