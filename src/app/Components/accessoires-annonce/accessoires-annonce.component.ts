import { Component, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AccService } from 'src/app/services/acc_service/acc.service';
import { UserService } from 'src/app/services/user_service/user.service';

@Component({
  selector: 'app-accessoires-annonce',
  templateUrl: './accessoires-annonce.component.html',
  styleUrls: ['./accessoires-annonce.component.css']
})
export class AccessoiresAnnonceComponent implements OnDestroy {
  accsub:any
  isloggedin:any
  constructor(private acc:AccService,private route:Router,private user:UserService ){
this.isloggedin=localStorage.getItem('logged')
  }
  submit(f: NgForm) {
    if(this.isloggedin!==null){
      f.value.email=localStorage.getItem('email')
    }
    this.accsub = this.acc.postacc(f.value).subscribe(
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
    if (this.accsub) {
      this.accsub.unsubscribe(); // Check if camionsub is defined before unsubscribing
    }
  }
  }
