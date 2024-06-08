import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClient} from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Footer2Component } from './Components/footer2/footer2.component';
import { Region2Component } from './Components/region2/region2.component';
import { Marque2Component } from './Components/marque2/marque2.component';
import { RechercherComponent } from './Components/rechercher/rechercher.component';
import { Region1Component } from './Components/region1/region1.component';
import { Marque1Component } from './Components/marque1/marque1.component';
import { Voiture1Component } from './Components/voiture1/voiture1.component';
import { Moto1Component } from './Components/moto1/moto1.component';
import { Accessoires1Component } from './Components/accessoires1/accessoires1.component';
import { LocationVoiture1Component } from './Components/location-voiture1/location-voiture1.component';
import { AutreVehicule1Component } from './Components/autre-vehicule1/autre-vehicule1.component';
import { Footer1Component } from './Components/footer1/footer1.component';
import { SearchComponent } from './Components/search/search.component';
import { Login1Component } from './Components/login1/login1.component';
import { MenuVoitureComponent } from './Components/menu-voiture/menu-voiture.component';
import { MenuMotoComponent } from './Components/menu-moto/menu-moto.component';
import { MenuAccComponent } from './Components/menu-acc/menu-acc.component';
import { MenuLocationComponent } from './Components/menu-location/menu-location.component';
import { MenuAutreComponent } from './Components/menu-autre/menu-autre.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HomeComponent } from './Components/home/home.component';
import { Marque3Component } from './Components/marque3/marque3.component';
import { Login2Component } from './Components/login2/login2.component';
import { TousLesVoituresComponent } from './Components/tous-les-voitures/tous-les-voitures.component';
import { TousLesMotosComponent } from './Components/tous-les-motos/tous-les-motos.component';
import { TousLesCamionsComponent } from './Components/tous-les-camions/tous-les-camions.component';
import { TousLesAutresComponent } from './Components/tous-les-autres/tous-les-autres.component';
import { TousLesLocationsComponent } from './Components/tous-les-locations/tous-les-locations.component';
import { TousLesAccComponent } from './Components/tous-les-acc/tous-les-acc.component';
import { Camion1Component } from './Components/camion1/camion1.component';
import { MenuCamionComponent } from './Components/menu-camion/menu-camion.component';
import { AboutComponent } from './Components/about/about.component';
import { ErreurComponent } from './Components/erreur/erreur.component';
import { AnnoncePrinciapleComponent } from './Components/annonce-princiaple/annonce-princiaple.component';
import { AccessoiresAnnonceComponent } from './Components/accessoires-annonce/accessoires-annonce.component';
import { CamionsAnnonceComponent } from './Components/camions-annonce/camions-annonce.component';
import { LocationAnnonceComponent } from './Components/location-annonce/location-annonce.component';
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
import { FormsModule } from '@angular/forms';
import { MotoAnnonceComponent } from './Components/moto-annonce/moto-annonce.component';
import { AccountComponent } from './account/account.component';
import { AccountVoitureComponent } from './Account_components/account-voiture/account-voiture.component';
import { AccountNavComponent } from './Account_components/account-nav/account-nav.component';
import { EditVoitureComponent } from './Components/edit-voiture/edit-voiture.component';
import { EditMotoComponent } from './Components/edit-moto/edit-moto.component';
import { EditLocationComponent } from './Components/edit-location/edit-location.component';
import { EditCamionComponent } from './Components/edit-camion/edit-camion.component';
import { EditAccComponent } from './Components/edit-acc/edit-acc.component';
import { EditAutreComponent } from './Components/edit-autre/edit-autre.component';
import { JWT_OPTIONS, JwtModule } from '@auth0/angular-jwt';
import { JwtHelperService } from '@auth0/angular-jwt';
import { SearchResultComponent } from './Components/search-result/search-result.component';
import { AccountHomeComponent } from './Account_components/account-home/account-home.component';
import { AccountAboutComponent } from './Account_components/account-about/account-about.component';
import { ResultNavbarSearchComponent } from './Components/result-navbar-search/result-navbar-search.component';
import { AllUsersComponent } from './Account_components/all-users/all-users.component';
import { DemandeExpertComponent } from './Account_components/demande-expert/demande-expert.component';
import { ListeExpertsComponent } from './Account_components/liste-experts/liste-experts.component';
import { EnsembleDemandesComponent } from './Account_components/ensemble-demandes/ensemble-demandes.component';
import { DemandeExpertiseComponent } from './Account_components/demande-expertise/demande-expertise.component';
@NgModule({
  declarations: [
    AppComponent,
    Footer2Component,
    Region2Component,
    Marque2Component,
    RechercherComponent,
    Region1Component,
    Marque1Component,
    Voiture1Component,
    Moto1Component,
    Accessoires1Component,
    LocationVoiture1Component,
    AutreVehicule1Component,
    Footer1Component,
    SearchComponent,
    Login1Component,
    MenuVoitureComponent,
    MenuMotoComponent,
    MenuAccComponent,
    MenuLocationComponent,
    MenuAutreComponent,
    NavbarComponent,
    HomeComponent,
    Marque3Component,
    Login2Component,
    TousLesVoituresComponent,
    TousLesMotosComponent,
    TousLesAccComponent,
    TousLesLocationsComponent,
    TousLesCamionsComponent,
    TousLesAutresComponent,
    Camion1Component,
    MenuCamionComponent,
    AboutComponent,
    ErreurComponent,
    AnnoncePrinciapleComponent,
    AccessoiresAnnonceComponent,
    CamionsAnnonceComponent,
    LocationAnnonceComponent,
    AutreAnnonceComponent,
    VoitureAnnonce1Component,
    DetailsComponent,
    ResultatMarqueComponent,
    ResultatRegionComponent,
    DetailsMotoComponent,
    DetailsLocationComponent,
    DetailsAccComponent,
    DetailsAutreComponent,
    DetailsCamionComponent,
    MotoAnnonceComponent,
    AccountComponent,
    AccountVoitureComponent,
    AccountNavComponent,
    EditVoitureComponent,
    EditMotoComponent,
    EditLocationComponent,
    EditCamionComponent,
    EditAutreComponent,
    EditAccComponent,
    SearchResultComponent,
    AccountHomeComponent,
    AccountAboutComponent,
    ResultNavbarSearchComponent,
    AllUsersComponent,
    DemandeExpertComponent,
    ListeExpertsComponent,
    EnsembleDemandesComponent,
    DemandeExpertiseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    JwtModule,
  ],
  providers: [JwtModule,
    JwtHelperService,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
