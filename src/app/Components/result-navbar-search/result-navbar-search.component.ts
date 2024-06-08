import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AccService } from 'src/app/services/acc_service/acc.service';
import { AutreService } from 'src/app/services/autre_service/autre.service';
import { CamionService } from 'src/app/services/camion_service/camion.service';
import { LocationService } from 'src/app/services/location_service/location.service';
import { MotoService } from 'src/app/services/moto_service/moto.service';
import { VoitureService } from 'src/app/services/voiture_service/voiture.service';

@Component({
  selector: 'app-result-navbar-search',
  templateUrl: './result-navbar-search.component.html',
  styleUrls: ['./result-navbar-search.component.css']
})
export class ResultNavbarSearchComponent {
  region:any;
  route:Subscription
  menu_voiture:any
  menu_moto:any
  menu_camion:any
  menu_autre:any
  menu_location:any
  menu_acc:any
  option:any
  menu1:any=[]
  menu2:any=[]
  menu3:any=[]
  menu4:any=[]
  menu5:any=[]
  menu6:any=[]
  length:any=0;
  text:any
constructor(private act:ActivatedRoute,private voiture:VoitureService,private moto:MotoService,private acc:AccService,private camion:CamionService,private autre:AutreService,private location:LocationService){
  this.route=act.params.subscribe(data=>{
    this.text=data['text']
});
  console.log(this.text);
    this.menu_voiture=voiture.searchnav(this.text).subscribe((data)=>{
      this.menu1=data
      this.length=this.menu1.length
      console.log('voiture',this.menu1)
      })

  this.menu_moto=moto.searchnav(this.text).subscribe((data)=>{
    this.menu2=data
    console.log(this.menu2)
    this.length=this.menu2.length
    })

      this.menu_acc=acc.searchnav(this.text).subscribe((data)=>{
        this.menu5=data
        console.log(this.menu5)
        this.length=this.menu5.length
        })

      this.menu_location=location.searchnav(this.text).subscribe((data)=>{
        this.menu4=data
        console.log(this.menu4)
        this.length=this.menu4.length
        })


      this.menu_camion=camion.searchnav(this.text).subscribe((data)=>{
        this.menu3=data
        console.log(this.menu3)
        this.length=this.menu3.length
        })


      this.menu_autre=autre.searchnav(this.text).subscribe((data)=>{
        this.menu6=data
        console.log(this.menu6)
        this.length=this.menu6.length
        })
    }
ngOnDestroy(): void {
  if(this.route){
    this.route.unsubscribe();
  }
  if(this.menu_acc){
    this.menu_acc.unsubscribe();
  }
  if(this.menu_autre){
    this.menu_autre.unsubscribe();
  }
  if(this.menu_location){
    this.menu_location.unsubscribe();
  }
  if(this.menu_moto){
    this.menu_moto.unsubscribe();
  }
  if(this.menu_voiture){
    this.menu_voiture.unsubscribe();
  }
  if(this.menu_camion){
    this.menu_camion.unsubscribe();
  }

}
}
