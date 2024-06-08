import { Component, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user_service/user.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login1',
  templateUrl: './login1.component.html',
  styleUrls: ['./login1.component.css'],
  providers: [
    JwtHelperService // Provide JwtHelperService here
  ]
})
export class Login1Component implements OnDestroy {
  loginsub:any
  token:any
  constructor(private user:UserService,private jwtHelper: JwtHelperService,private route:Router){

  }
  // decodeToken() {
  //   const token:any = localStorage.getItem('token');
  //   const decodedToken = this.jwtHelper.decodeToken(token);
  //   console.log(decodedToken);
  //   return decodedToken
  // }
  // submit(f:NgForm){
  //   console.log(f.value)
  //   this.loginsub=this.user.sendToken(f.value).subscribe((data)=>{
  //     console.log(data)
  //     this.token=data;
  //     console.log("token=",this.token)
  //     // localStorage.setItem('token',this.token);
  //     // const object=this.decodeToken();
  //     // console.log('this object from token= ',object)
  //     //this.route.navigate([`/account/a/${object.Email}`])

  //   })
  // }
  // submit(f: NgForm) {
  //   debugger
  //   console.log(f.value);
  //   this.loginsub = this.user.sendToken(f.value).subscribe(
  //     (data:any) => {
  //       this.token = data;
  //       console.log(this.token['token'])
  //       // if (this.token) {
  //       //   // Token received, decode and navigate
  //       //   const decodedToken = this.jwtHelper.decodeToken(this.token);
  //       //   console.log('Decoded token:', decodedToken);
  //       //   // Navigate to the appropriate route using data from the decoded token
  //       //   this.route.navigate([`/account/a/${decodedToken.Email}`]);
  //       // } else {
  //       //   console.error('Token not received or invalid.');
  //       //   // Handle the case where token is not received or invalid
  //       // }
  //     },
  //     (error) => {
  //       console.error('Error occurred while logging in:', error);
  //       // Handle the error appropriately (e.g., display an error message to the user)
  //     }
  //   );
  // }
  submit(f: NgForm) {
    console.log(f.value);
    this.loginsub = this.user.sendToken(f.value).subscribe(
      (data:any) => {
        this.token = data;
        console.log(this.token['token']);
        if (this.token) { // Uncomment this block to handle token decoding and navigation
          // Token received, decode and navigate
          const decodedToken = this.jwtHelper.decodeToken(this.token['token']); // Access the token property
          console.log('Decoded token:', decodedToken);
          // Navigate to the appropriate route using data from the decoded token
          this.user.IsLoginIn=true
          localStorage.setItem('token',this.token['token']);
          localStorage.setItem('email',decodedToken.Email)
          localStorage.setItem('id',decodedToken.id)
          localStorage.setItem('NomPrenom',decodedToken.NomPrenom);
          localStorage.setItem('logged','true')
          localStorage.setItem('Role',decodedToken.Role)
          this.route.navigate([`/account/dashboard/${decodedToken.Email}`]);
        } else {
          console.error('Token not received or invalid.');
          // Handle the case where token is not received or invalid
        }
      },
      (error) => {
        console.error('Error occurred while logging in:', error);
        // Handle the error appropriately (e.g., display an error message to the user)
      }
    );
  }

  ngOnDestroy(): void {
if(this.loginsub){
  this.loginsub.unsubscribe();
}
  }

}

