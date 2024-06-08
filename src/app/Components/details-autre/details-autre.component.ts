import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AutreService } from 'src/app/services/autre_service/autre.service';
import { UserService } from 'src/app/services/user_service/user.service';

@Component({
  selector: 'app-details-autre',
  templateUrl: './details-autre.component.html',
  styleUrls: ['./details-autre.component.css']
})
export class DetailsAutreComponent implements OnDestroy{
  unique:any
  id:any
active:Subscription;
autresub:Subscription;
usersub:any;
user1:any
email:any
constructor(private act:ActivatedRoute,private autre:AutreService,private user:UserService){
  this.active=act.params.subscribe((data)=>{
    this.id=data['id'];
    console.log(this.id)
  })
  this.autresub=autre.getautre(this.id).subscribe((data)=>{
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
this.autresub.unsubscribe();
this.usersub.unsubscribe();
}
}
