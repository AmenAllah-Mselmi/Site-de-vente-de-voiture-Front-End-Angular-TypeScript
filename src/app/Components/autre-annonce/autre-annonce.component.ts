import { Component, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AutreService } from 'src/app/services/autre_service/autre.service';
import { CamionService } from 'src/app/services/camion_service/camion.service';
import { UserService } from 'src/app/services/user_service/user.service';

@Component({
  selector: 'app-autre-annonce',
  templateUrl: './autre-annonce.component.html',
  styleUrls: ['./autre-annonce.component.css']
})
export class AutreAnnonceComponent implements OnDestroy {
  autresub:any
  isloggedin:any
  constructor(private autre:AutreService,private route:Router,private user:UserService ){
this.isloggedin=localStorage.getItem('logged')
  }
  submit(f: NgForm) {
    if(this.isloggedin!==null){
      f.value.email=localStorage.getItem('email')
    }
    this.autresub = this.autre.postautre(f.value).subscribe(
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
    if (this.autresub) {
      this.autresub.unsubscribe(); // Check if camionsub is defined before unsubscribing
    }
  }
  }

