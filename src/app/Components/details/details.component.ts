import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user_service/user.service';
import { VoitureService } from 'src/app/services/voiture_service/voiture.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent  implements OnDestroy{
  unique:any
  logged:any
  id:any
active:Subscription;
voituresub:Subscription;
usersub:any;
user1:any
email:any
constructor(private act:ActivatedRoute,private voiture:VoitureService,private user:UserService){
  this.active=act.params.subscribe((data)=>{
    this.logged=localStorage.getItem('logged')
    this.id=data['id'];
    console.log(this.id)
  })
  this.voituresub=voiture.getvoiture(this.id).subscribe((data)=>{
    this.unique=data;
    console.log(this.unique)
    console.log(this.unique['email'])
    this.email=this.unique['email']
    this.usersub=user.getuser(this.email).subscribe((data)=>{
      this.user1=data;
      console.log(this.user1)
    })
  })

}
ngOnDestroy(): void {
this.active.unsubscribe();
this.voituresub.unsubscribe();
this.usersub.unsubscribe();
}
}
