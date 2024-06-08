import { Component, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { UserService } from 'src/app/services/user_service/user.service';
import { VoitureService } from 'src/app/services/voiture_service/voiture.service';

@Component({
  selector: 'app-voiture-annonce1',
  templateUrl: './voiture-annonce1.component.html',
  styleUrls: ['./voiture-annonce1.component.css']
})
export class VoitureAnnonce1Component  implements OnDestroy{
  carsub:any
 step: number
 isloggedin: string | null = localStorage.getItem('logged');
voiture={
  Marque:'',
  Modele:'',
  puissanceFiscale:'',
  MiseCirculation:'',
  kilometrage:0,
  Cylindree:'',
  Typecarburant:'',
  NombrePortes:'',
  BoiteVitesse:'',
  EtatVehicule:'',
  TitreAnnonce:'',
  email:'',
  Description:'',
  Region:'',
  Delegation:'',
  Etat:'',
  Prix:0,
  Telephone:'',
  JantesAluminium:false,
  ABS:false,
  DirectionAssistée:false,
  Climatisation:false,
  ESP:false,
  VitresElectriques:false,
  SystémeDeNavigation:false,
  FermetureCentrale:false,
  Airbags:false,
  MP3Bluetooth:false,
  RadarDeRecul:false,
  AntiPatinage:false,
  LimiteurDeVitesse:false,
  ToitOuvrant:false,
  RegulateurDeVitesse:false
}
  constructor(private car:VoitureService, private route: Router, private user: UserService) {
    this.isloggedin = localStorage.getItem('logged');
    this.step = 1;
  }
f1(){
this.step=2;
}
f2(){
this.step=1;
}
f3(){
  this.step=3;
  }
  submit(f: NgForm) {
    if (this.isloggedin) {
      const email = localStorage.getItem('email');
      if (email) {
        this.voiture.email = email;
      }
    }
    this.carsub = this.car.postcar(this.voiture).subscribe(
      (response:any) => {
        console.log('Post successful', response);
      },
      (error:any) => {
        console.error('Error while posting', error);
        // Handle error here, e.g., show error message to the user
      }
    );
    console.log(this.voiture);
    this.route.navigate(['/']);
  }
  ngOnDestroy(): void {
    if (this.carsub) {
      this.carsub.unsubscribe(); // Check if camionsub is defined before unsubscribing
    }
  }
}
