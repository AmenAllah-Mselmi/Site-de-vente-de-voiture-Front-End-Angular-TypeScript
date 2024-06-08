import { Component, OnDestroy } from '@angular/core';
import { elementAt, Subscription } from 'rxjs';
import { DemandeService } from 'src/app/services/demande_service/demande.service';
import { UserService } from 'src/app/services/user_service/user.service';

@Component({
  selector: 'app-ensemble-demandes',
  templateUrl: './ensemble-demandes.component.html',
  styleUrls: ['./ensemble-demandes.component.css']
})
export class EnsembleDemandesComponent implements OnDestroy{
  demandedesub:any
  menu:any=[]
  updatesub:any
  object:any
  uniquesub:any
  persub:any
  personne:any
  valider_demande:any
  refuser_demande:any
  constructor(private demande:DemandeService,private user:UserService){
    this.demandedesub=this.demande.intouchable().subscribe((data)=>{
this.menu=data
console.log(this.menu)
    })
  }
  async valider(id:any,email:any){
    this.menu=this.menu.filter((element:any)=>element._id!==id)
this.uniquesub= await this.demande.getunique(id).subscribe((data)=>{
  this.object=data
  console.log(this.object)
  this.object.touched=true
  this.object.approuved=true
})

this.persub=await this.user.getuser(email).subscribe((data)=>{
  this.personne=data
  this.personne.Role='Expert'
  console.log(this.personne);
    })

this.updatesub=await this.user.updaterole(email,this.personne).subscribe((data)=>{
  console.log('updated successfully')
  console.log(data)
})

this.valider_demande=await this.demande.valider(id,this.object).subscribe((data)=>{
  console.log("demande validée")
})
  }
  async refuser(id:any,email:any){
    this.menu=this.menu.filter((element:any)=>element._id!==id)
    this.uniquesub= await this.demande.getunique(id).subscribe((data)=>{
      this.object=data
      console.log(this.object)
      this.object.touched=true
      this.object.approuved=true
    })
    this.persub=await this.user.getuser(email).subscribe((data)=>{
      this.personne=data
      console.log(this.personne);
        })
        this.refuser_demande=this.demande.refuser(id,this.object).subscribe((data)=>{
          console.log("demande refusée")
        })
  }
  ngOnDestroy(): void {
if(this.demandedesub){
  this.demandedesub.unsubscribe();
}
if(this.updatesub){
  this.updatesub.unsubscribe()
}
if(this.uniquesub){
  this.uniquesub.unsubscribe();
}
if(this.persub){
  this.persub.unsubscribe();
}
if(this.valider_demande){
  this.valider_demande.unsubscribe();
}
if(this.refuser_demande){
  this.refuser_demande.unsubscribe();
}
  }


}
