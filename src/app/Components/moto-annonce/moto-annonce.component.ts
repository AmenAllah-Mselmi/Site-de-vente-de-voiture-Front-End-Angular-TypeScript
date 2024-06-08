import { Component, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MotoService } from 'src/app/services/moto_service/moto.service';
import { UserService } from 'src/app/services/user_service/user.service';

@Component({
  selector: 'app-moto-annonce',
  templateUrl: './moto-annonce.component.html',
  styleUrls: ['./moto-annonce.component.css']
})
export class MotoAnnonceComponent implements OnDestroy {
  motosub: Subscription | undefined;
  step: number = 1;
  isloggedin: string | null = localStorage.getItem('logged');
  moto = {
    Marque: '',
    AnneeModele: '',
    kilometrage: 0,
    Cylindree: '',
    BoiteVitesse: '',
    EtatVehicule: '',
    TitreAnnonce: '',
    email: '',
    Description: '',
    Region: '',
    Delegation: '',
    Etat: '',
    Prix: 0,
    Telephone: ''
  };

  constructor(private motocycle: MotoService, private route: Router, private user: UserService) {
    this.isloggedin = localStorage.getItem('logged');
    this.step = 1;
  }

  f1() {
    this.step = 2;
  }

  f2() {
    this.step = 1;
  }

  submit(f: NgForm) {
    if (this.isloggedin) {
      const email = localStorage.getItem('email');
      if (email) {
        this.moto.email = email;
      }
    }
    this.motosub = this.motocycle.postmoto(this.moto).subscribe(
      (response: any) => {
        console.log('Post successful', response);
      },
      (error: any) => {
        console.error('Error while posting', error);
        // Handle error here, e.g., show error message to the user
      }
    );
    console.log(this.moto);
    this.route.navigate(['/']);
  }

  ngOnDestroy(): void {
    if (this.motosub) {
      this.motosub.unsubscribe(); // Check if motosub is defined before unsubscribing
    }
  }
}
