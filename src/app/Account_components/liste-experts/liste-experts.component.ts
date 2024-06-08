import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExpertiseService } from 'src/app/services/expertise_service/expertise.service';
import { UserService } from 'src/app/services/user_service/user.service';

@Component({
  selector: 'app-liste-experts',
  templateUrl: './liste-experts.component.html',
  styleUrls: ['./liste-experts.component.css']
})
export class ListeExpertsComponent implements OnDestroy {
  menu:any=[]
  expertsub:any
  expertisesub:any
  object:any
  actsub:any
  usersub:any
  var:any
  personne:any
  id:any
constructor(private user:UserService,private expertise:ExpertiseService,private act:ActivatedRoute,private router:Router){
  this.id=localStorage.getItem('email');
  // console.log(this.id)
this.expertsub=user.getExperts().subscribe((data)=>{
  this.menu=data
  console.log(this.menu)
})
this.actsub=act.params.subscribe((data)=>{
  this.var=data['id']
  console.log(this.var)
})
this.usersub=user.getuser(this.id).subscribe((data)=>{
  this.personne=data
  console.log('personne',this.personne);
})
}
submit(id:any){
  this.object={
    idannonce:this.var,
    NomPrenom:this.personne.NomPrenom,
    Region:this.personne.Region,
    idExpert:id,
    email:this.personne.Email
  }
  console.log(this.object)
  this.expertisesub=this.expertise.post_expertise(this.object).subscribe((data)=>{
    console.log('posted successfully')
  })
this.router.navigate(['/account/home'])
}
ngOnDestroy(): void {
    if(this.expertsub){
      this.expertsub.unsubscribe();
    }
    if(this.expertisesub){
      this.expertisesub.unsubscribe();
    }
    if(this.actsub){
      this.actsub.unsubscribe();
    }
    if(this.usersub){
      this.usersub.unsubscribe();
    }
}
}
