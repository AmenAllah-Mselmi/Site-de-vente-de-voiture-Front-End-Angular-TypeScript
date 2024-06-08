import { Component } from '@angular/core';

@Component({
  selector: 'app-account-about',
  templateUrl: './account-about.component.html',
  styleUrls: ['./account-about.component.css']
})
export class AccountAboutComponent {
name:any=localStorage['NomPrenom'];
}
