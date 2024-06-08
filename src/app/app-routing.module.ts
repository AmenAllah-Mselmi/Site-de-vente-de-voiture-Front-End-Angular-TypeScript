import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { Login1Component } from './Components/login1/login1.component';
import { Marque3Component } from './Components/marque3/marque3.component';
import { Login2Component } from './Components/login2/login2.component';
import { TousLesVoituresComponent } from './Components/tous-les-voitures/tous-les-voitures.component';
import { TousLesMotosComponent } from './Components/tous-les-motos/tous-les-motos.component';
import { TousLesCamionsComponent } from './Components/tous-les-camions/tous-les-camions.component';
import { TousLesAutresComponent } from './Components/tous-les-autres/tous-les-autres.component';
import { TousLesLocationsComponent } from './Components/tous-les-locations/tous-les-locations.component';
import { TousLesAccComponent } from './Components/tous-les-acc/tous-les-acc.component';
import { AboutComponent } from './Components/about/about.component';
import { ErreurComponent } from './Components/erreur/erreur.component';
import { AnnoncePrinciapleComponent } from './Components/annonce-princiaple/annonce-princiaple.component';
import { CamionsAnnonceComponent } from './Components/camions-annonce/camions-annonce.component';
import { LocationAnnonceComponent } from './Components/location-annonce/location-annonce.component';
import { AccessoiresAnnonceComponent } from './Components/accessoires-annonce/accessoires-annonce.component';
import { AutreAnnonceComponent } from './Components/autre-annonce/autre-annonce.component';
import { VoitureAnnonce1Component } from './Components/voiture-annonce1/voiture-annonce1.component';
import { DetailsComponent } from './Components/details/details.component';
import { ResultatMarqueComponent } from './Components/resultat-marque/resultat-marque.component';
import { ResultatRegionComponent } from './Components/resultat-region/resultat-region.component';
import { DetailsMotoComponent } from './Components/details-moto/details-moto.component';
import { DetailsCamionComponent } from './Components/details-camion/details-camion.component';
import { DetailsLocationComponent } from './Components/details-location/details-location.component';
import { DetailsAccComponent } from './Components/details-acc/details-acc.component';
import { DetailsAutreComponent } from './Components/details-autre/details-autre.component';
import { MotoAnnonceComponent } from './Components/moto-annonce/moto-annonce.component';
import { SearchComponent } from './Components/search/search.component';
import { SearchResultComponent } from './Components/search-result/search-result.component';
import { ResultNavbarSearchComponent } from './Components/result-navbar-search/result-navbar-search.component';


const routes: Routes = [
{path:'',component:HomeComponent,pathMatch:'full'},
{path:'login',component:Login1Component,pathMatch:'full'},
{path:'marque3',component:Marque3Component,pathMatch:'full'},
{path:'login2',component:Login2Component,pathMatch:'full'},
{path:'tous_les_voitures',component:TousLesVoituresComponent,pathMatch:'full'},
{path:'tous_les_motos',component:TousLesMotosComponent,pathMatch:'full'},
{path:'tous_camions',component:TousLesCamionsComponent,pathMatch:'full'},
{path:'tous_les_autres',component:TousLesAutresComponent,pathMatch:'full'},
{path:'details/:id',component:DetailsComponent,pathMatch:'full'},
{path:'marques/:id',component:ResultatMarqueComponent,pathMatch:'full'},
{path:'marque3/marques/:id',component:ResultatMarqueComponent,pathMatch:'full'},
{path:'search/:option/:region/:text',component:SearchResultComponent,pathMatch:'full'},
{path:'search/:text',component:ResultNavbarSearchComponent,pathMatch:'full'},
{path:'annonce',children:[
  {path:'',component:AnnoncePrinciapleComponent,pathMatch:'full'},
  {path:'camion',component:CamionsAnnonceComponent,pathMatch:'full'},
  {path:'location',component:LocationAnnonceComponent,pathMatch:'full'},
  {path:'accessoire',component:AccessoiresAnnonceComponent,pathMatch:'full'},
  {path:"autre",component:AutreAnnonceComponent,pathMatch:'full'},
  {path:'voiture',children:[
    {path:'v1',component:VoitureAnnonce1Component,pathMatch:'full'},

  ]},
  {path:'moto',component:MotoAnnonceComponent,pathMatch:'full'}
]},
{path:'details_moto/:id',component:DetailsMotoComponent,pathMatch:'full'},
{path:'details_camion/:id',component:DetailsCamionComponent,pathMatch:'full'},
{path:'details_location/:id',component:DetailsLocationComponent,pathMatch:'full'},
{path:'details_acc/:id',component:DetailsAccComponent,pathMatch:'full'},
{path:'details_autre/:id',component:DetailsAutreComponent,pathMatch:'full'},
{path:'tous_les_locations',component:TousLesLocationsComponent,pathMatch:'full'},
{path:'tous_les_acc',component:TousLesAccComponent,pathMatch:'full'},
{path:'about',component:AboutComponent,pathMatch:'full'},
{path:'region/:id',component:ResultatRegionComponent,pathMatch:'full'},
{path:'account',loadChildren:()=>import('./account/account.module').then(m=>m.AccountModule)},
{path:'**',component:ErreurComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
