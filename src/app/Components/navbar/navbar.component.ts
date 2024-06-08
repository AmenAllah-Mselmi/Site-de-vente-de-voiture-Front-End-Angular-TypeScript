import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { UserService } from 'src/app/services/user_service/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isconnected:any
  email:any
  name:any
  text:any='A'
  Role:any
  isUser:boolean=false
  isAdmin:boolean=false
  isExpert:boolean=false
constructor(private user:UserService,private route:Router){
this.isconnected=localStorage.getItem('logged')
if(this.isconnected!==null){
  this.email=localStorage.getItem('email')
  this.name=localStorage.getItem('NomPrenom')
  this.Role=localStorage.getItem('Role')
  if(this.Role=="Admin"){
    this.isAdmin=true
  }
  else if(this.Role=="Expert"){
    this.isExpert=true
  }
  else{
    this.isUser=true
  }
}
}
search(){
  console.log(this.text)
  this.route.navigate([`/search/${this.text}`]).then(()=>{
    window.location.reload()
  })
}
submit(){
  this.user.IsLoginIn=false
    localStorage.clear()
  this.route.navigate(['/'])
  }
}
