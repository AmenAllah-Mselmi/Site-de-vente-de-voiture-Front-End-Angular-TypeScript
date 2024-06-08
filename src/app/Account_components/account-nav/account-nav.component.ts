import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user_service/user.service';

@Component({
  selector: 'app-account-nav',
  templateUrl: './account-nav.component.html',
  styleUrls: ['./account-nav.component.css']
})
export class AccountNavComponent {
@Input('name')name:any
email:any=localStorage.getItem('email')
constructor(private route:Router,private user:UserService){

}
submit(){
this.user.IsLoginIn=false
  localStorage.clear()
this.route.navigate(['/'])
}
}
