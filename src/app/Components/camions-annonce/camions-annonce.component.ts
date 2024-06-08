import { Component, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CamionService } from 'src/app/services/camion_service/camion.service';
import { UserService } from 'src/app/services/user_service/user.service';

@Component({
  selector: 'app-camions-annonce',
  templateUrl: './camions-annonce.component.html',
  styleUrls: ['./camions-annonce.component.css']
})
export class CamionsAnnonceComponent implements OnDestroy {
camionsub:any
isloggedin:any
constructor(private camion:CamionService,private route:Router,private user:UserService){
this.isloggedin=localStorage.getItem('logged')
}
submit(f: NgForm) {
  if(this.isloggedin!==null){
    f.value.email=localStorage.getItem('email')
  }
  this.camionsub = this.camion.postcamion(f.value).subscribe(
    (response) => {
      console.log('Post successful', response);
    },
    (error) => {
      console.error('Error while posting', error);
      // Handle error here, e.g., show error message to the user
    }
  );
  console.log(f);
  console.log(f.value);
  this.route.navigate(['/']);
}

ngOnDestroy(): void {
  if (this.camionsub) {
    this.camionsub.unsubscribe(); // Check if camionsub is defined before unsubscribing
  }
}
}
