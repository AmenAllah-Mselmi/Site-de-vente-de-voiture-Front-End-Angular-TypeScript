import { Component, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user_service/user.service';
@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnDestroy {
  usersub:any
  pass1:String=''
  pass2:String=''
  constructor(private user:UserService,private route:Router){
  }
  submit(f:NgForm){
    console.log(f.value);
if(this.pass1.length>=6 && this.pass1===this.pass2){
  console.log(f.value);
  f.value.Role='User'
this.usersub=this.user.createuser(f.value).subscribe((data)=>{
  console.log(data)
  console.log('created successfully');
})
this.route.navigate(['/login'])
}
  }
  ngOnDestroy(): void {
      if(this.usersub){
        this.usersub.unsubscribe();
      }
  }
}
