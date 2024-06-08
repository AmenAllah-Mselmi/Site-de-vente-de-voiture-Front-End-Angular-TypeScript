import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AccService } from 'src/app/services/acc_service/acc.service';
import { MotoService } from 'src/app/services/moto_service/moto.service';
import { UserService } from 'src/app/services/user_service/user.service';

@Component({
  selector: 'app-details-acc',
  templateUrl: './details-acc.component.html',
  styleUrls: ['./details-acc.component.css']
})
export class DetailsAccComponent implements OnDestroy{
  unique:any
  id:any
active:Subscription;
accsub:Subscription;
usersub:any;
user1:any
email:any
constructor(private act:ActivatedRoute,private acc:AccService,private user:UserService){
  this.active=act.params.subscribe((data)=>{
    this.id=data['id'];
    console.log(this.id)
  })
  this.accsub=acc.getacc(this.id).subscribe((data)=>{
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
this.accsub.unsubscribe();
this.usersub.unsubscribe();
}
}
