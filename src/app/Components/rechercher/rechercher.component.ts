import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rechercher',
  templateUrl: './rechercher.component.html',
  styleUrls: ['./rechercher.component.css']
})
export class RechercherComponent {
@Input('type')type:any;
a1: string = ''; // Initialize variables with empty strings
a2: string = '';
a3: string = '';
a4: string = '';
a5: string = '';
a6: string = '';
constructor() {
  // Logic to be executed when the component initializes
  if (this.type === "voiture") {
    // Do something when type is "voiture"
    this.a1="background-color:rgb(194, 233, 246);";
    this.a2="";
    this.a3="";
    this.a4="";
    this.a5="";
    this.a6="";

  } else if(this.type==="moto") {
    this.a2="background-color:rgb(194, 233, 246);";
    this.a1="";
    this.a3="";
    this.a4="";
    this.a5="";
    this.a6="";
    // Do something else
  }
  else if(this.type==="camion"){
    this.a5="background-color:rgb(194, 233, 246);";
    this.a2="";
    this.a3="";
    this.a4="";
    this.a1="";
    this.a6="";
  }
  else if(this.type==="acc"){
    this.a3="background-color:rgb(194, 233, 246);";
    this.a2="";
    this.a1="";
    this.a4="";
    this.a5="";
    this.a6="";
  }
  else if(this.type==="location"){
    this.a4="background-color:rgb(194, 233, 246);";
    this.a2="";
    this.a3="";
    this.a1="";
    this.a5="";
    this.a6="";
  }
  else{
    //this.a6="background-color:rgb(194, 233, 246);";
    this.a2="";
    this.a3="";
    this.a4="";
    this.a5="";
    this.a1="";
  }
}
}
