import { Component, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LocationService } from 'src/app/services/location_service/location.service';
import { UserService } from 'src/app/services/user_service/user.service';

@Component({
  selector: 'app-location-annonce',
  templateUrl: './location-annonce.component.html',
  styleUrls: ['./location-annonce.component.css']
})
export class LocationAnnonceComponent implements OnDestroy {
  locationsub:any
  isloggedin:any
constructor(private location:LocationService,private route:Router,private user:UserService ){
this.isloggedin=localStorage.getItem('logged')
}
  submit(f: NgForm) {
    if(this.isloggedin!==null){
      f.value.email=localStorage.getItem('email')
    }
    this.locationsub = this.location.postlocation(f.value).subscribe(
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
    if (this.locationsub) {
      this.locationsub.unsubscribe(); // Check if camionsub is defined before unsubscribing
    }
  }
  }
