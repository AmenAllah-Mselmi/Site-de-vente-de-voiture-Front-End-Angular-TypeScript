import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { LocationService } from 'src/app/services/location_service/location.service';
import { UserService } from 'src/app/services/user_service/user.service';

@Component({
  selector: 'app-details-location',
  templateUrl: './details-location.component.html',
  styleUrls: ['./details-location.component.css']
})
export class DetailsLocationComponent implements OnDestroy{
  unique:any
  id:any
active:Subscription;
locationsub:Subscription;
usersub:any;
user1:any
email:any
constructor(private act:ActivatedRoute,private location:LocationService,private user:UserService){
  this.active=act.params.subscribe((data)=>{
    this.id=data['id'];
    console.log(this.id)
  })
  this.locationsub=location.getlocation(this.id).subscribe((data)=>{
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
this.locationsub.unsubscribe();
this.usersub.unsubscribe();
}
}
