import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountVoitureComponent } from '../Account_components/account-voiture/account-voiture.component';
import { EditVoitureComponent } from '../Components/edit-voiture/edit-voiture.component';
import { EditMotoComponent } from '../Components/edit-moto/edit-moto.component';
import { EditLocationComponent } from '../Components/edit-location/edit-location.component';
import { EditCamionComponent } from '../Components/edit-camion/edit-camion.component';
import { EditAccComponent } from '../Components/edit-acc/edit-acc.component';
import { EditAutreComponent } from '../Components/edit-autre/edit-autre.component';
import { AccountHomeComponent } from '../Account_components/account-home/account-home.component';
import { AccountAboutComponent } from '../Account_components/account-about/account-about.component';
import { AllUsersComponent } from '../Account_components/all-users/all-users.component';
import { DemandeExpertComponent } from '../Account_components/demande-expert/demande-expert.component';
import { ErreurComponent } from '../Components/erreur/erreur.component';
import { ListeExpertsComponent } from '../Account_components/liste-experts/liste-experts.component';
import { EnsembleDemandesComponent } from '../Account_components/ensemble-demandes/ensemble-demandes.component';
import { DemandeExpertiseComponent } from '../Account_components/demande-expertise/demande-expertise.component';

const routes: Routes = [
  {path:'dashboard/:email',component:AccountVoitureComponent,pathMatch:'full'},
  {path:'allusers',component:AllUsersComponent,pathMatch:'full'},
  {path:'edit_voiture/:email/:id',component:EditVoitureComponent,pathMatch:'full'},
  {path:'edit_moto/:email/:id',component:EditMotoComponent,pathMatch:'full'},
  {path:'edit_location/:email/:id',component:EditLocationComponent,pathMatch:'full'},
  {path:'edit_camion/:email/:id',component:EditCamionComponent,pathMatch:'full'},
  {path:'edit_acc/:email/:id',component:EditAccComponent,pathMatch:'full'},
  {path:'edit_autre/:email/:id',component:EditAutreComponent,pathMatch:'full'},
  {path:'home',component:AccountHomeComponent,pathMatch:'full'},
  {path:'about',component:AccountAboutComponent,pathMatch:'full'},
  {path:'demandeExpert',component:DemandeExpertComponent,pathMatch:'full'},
  {path:'liste_experts/:id',component:ListeExpertsComponent,pathMatch:'full'},
  {path:'Ensemble_Demandes',component:EnsembleDemandesComponent,pathMatch:'full'},
  {path:'Demande_Expertise',component:DemandeExpertiseComponent,pathMatch:'full'},
  {path:'**',component:ErreurComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
