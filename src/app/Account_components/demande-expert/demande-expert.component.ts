import { Component, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DemandeService } from 'src/app/services/demande_service/demande.service';

@Component({
  selector: 'app-demande-expert',
  templateUrl: './demande-expert.component.html',
  styleUrls: ['./demande-expert.component.css']
})
export class DemandeExpertComponent implements OnDestroy{
  objet:any={
    lettre_de_motivation:'',
    permis:'',
    Formation:'',
    Nb_Voiture_vendus:0,
    approuved:false,
    touched:false,
    email:localStorage.getItem('email')
  }
  postsub:any
  email1:any=localStorage.getItem('email')
constructor(private demande:DemandeService,private router:Router){
}
submit(f:NgForm){
  this.postsub=this.demande.create_Demande(this.objet).subscribe((data)=>{
    console.log('envoye avec succes')
this.router.navigate([`/account/dashboard/${this.email1}`])
  })
}
ngOnDestroy(): void {
if(this.postsub){
  this.postsub.unsubscribe();
}
}
}
