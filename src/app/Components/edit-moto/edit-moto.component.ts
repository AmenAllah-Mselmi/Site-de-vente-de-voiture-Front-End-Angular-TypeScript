import { Component, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AutreService } from 'src/app/services/autre_service/autre.service';
import { MotoService } from 'src/app/services/moto_service/moto.service';

@Component({
  selector: 'app-edit-moto',
  templateUrl: './edit-moto.component.html',
  styleUrls: ['./edit-moto.component.css']
})
export class EditMotoComponent implements OnDestroy{
  motosub:any
 step:any;
 lien:String=''
liensub:any
email:String=''
moto:any={
  Marque:'',
  AnneeModele:'',
  kilometrage:0,
  Cylindree:'',
  BoiteVitesse:'',
  EtatVehicule:'',
  TitreAnnonce:'',
  email:'',
  Description:'',
  Region:'',
  Delegation:'',
  Etat:'',
  Prix:0,
  Telephone:''
}
email1:any=localStorage.getItem('email')
  constructor(private motocycle:MotoService,private route:Router,private act:ActivatedRoute){

    this.step=1;
    this.liensub=act.params.subscribe((data)=>{
      this.lien=data['id'];
      this.email=data['email'];
      console.log("email=",this.email)
      console.log("lien= ",this.lien)
      this.motosub=motocycle.getmoto(this.lien).subscribe((data)=>{
        console.log(data);
        this.moto=data
        console.log("la nouvelle moto est egale",this.moto)
      })
    })
  }
f1(){
this.step=2;
}
f2(){
this.step=1;
}
  submit(f: NgForm) {
    this.motosub = this.motocycle.update(this.lien,this.moto).subscribe(
      (response:any) => {
        console.log('Post successful', response);
      },
      (error:any) => {
        console.error('Error while posting', error);
        // Handle error here, e.g., show error message to the user
      }
    );
    console.log(this.moto);
    this.route.navigate([`/account/dashboard/${this.email1}`]);
  }
  ngOnDestroy(): void {
    if (this.motosub) {
      this.motosub.unsubscribe(); // Check if camionsub is defined before unsubscribing
    }
    if(this.liensub){
      this.liensub.unsubscribe();
    }
  }
}
