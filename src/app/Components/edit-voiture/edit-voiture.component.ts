import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { VoitureService } from 'src/app/services/voiture_service/voiture.service';

@Component({
  selector: 'app-edit-voiture',
  templateUrl: './edit-voiture.component.html',
  styleUrls: ['./edit-voiture.component.css']
})
export class EditVoitureComponent {
  getcar:any
  carsub:any
 step:any;
voiture:any={
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
car1:any
lien:String=''
liensub:any
email:String=''
email1:any=localStorage.getItem('email')
  constructor(private car:VoitureService,private route:Router,private act:ActivatedRoute){
  this.step=1;
  this.liensub=act.params.subscribe((data)=>{
    this.lien=data['id'];
    this.email=data['email'];
    console.log("email=",this.email)
    console.log("lien= ",this.lien)
    this.getcar=car.getvoiture(this.lien).subscribe((data)=>{
      console.log(data);
      this.car1=data;
      this.voiture=data
      console.log("la nouvelle voiture est egale",this.voiture)
    })
  })

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
    this.carsub = this.car.update(this.lien,this.voiture).subscribe(
      (response:any) => {
        console.log('Post successful', response);
      },
      (error:any) => {
        console.error('Error while posting', error);
        // Handle error here, e.g., show error message to the user
      }
    );
    console.log('le nouveau objet=',this.voiture);
    this.route.navigate([`/account/dashboard/${this.email1}`]);
  }
  ngOnDestroy(): void {
    if(this.carsub){
      this.carsub.unsubscribe();
    }
    if(this.liensub){
      this.liensub.unsubscribe();
    }
  }
}
