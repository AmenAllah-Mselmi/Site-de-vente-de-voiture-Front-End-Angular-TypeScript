import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CamionService } from 'src/app/services/camion_service/camion.service';
import { UserService } from 'src/app/services/user_service/user.service';

@Component({
  selector: 'app-details-camion',
  templateUrl: './details-camion.component.html',
  styleUrls: ['./details-camion.component.css']
})
export class DetailsCamionComponent implements OnDestroy{
  unique:any
  id:any
active:Subscription;
camionsub:Subscription;
usersub:any;
user1:any
email:any
constructor(private act:ActivatedRoute,private camion:CamionService,private user:UserService){
  this.active=act.params.subscribe((data)=>{
    this.id=data['id'];
    console.log(this.id)
  })
  this.camionsub=camion.getcamion(this.id).subscribe((data)=>{
    this.unique=data;
    console.log('this is unique',this.unique)
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
this.camionsub.unsubscribe();
this.usersub.unsubscribe();
}
}
