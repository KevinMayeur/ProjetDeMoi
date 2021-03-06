import { ErreurComponent } from './PageConnexion/erreur/erreur.component';
import { HomeComponent } from './PageConnexion/home/home.component';
import { PageConnexionComponent } from './PageConnexion/page-connexion.component';
import { InscriptionComponent } from './PageConnexion/inscription/inscription.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  {
    path: 'projet', component: PageConnexionComponent, children: [
      { path: 'inscription', component: InscriptionComponent },
      { path: 'home', component: HomeComponent },
      { path: 'erreur', component: ErreurComponent },
    ]
  },
  { path: '', redirectTo: '/projet', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
