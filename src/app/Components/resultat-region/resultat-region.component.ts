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
  selector: 'app-resultat-region',
  templateUrl: './resultat-region.component.html',
  styleUrls: ['./resultat-region.component.css']
})
export class ResultatRegionComponent {
    var:any;
    route:Subscription
    menu_voiture:Subscription
    menu_moto:Subscription
    menu_camion:Subscription
    menu_autre:Subscription
    menu_location:Subscription
    menu_acc:Subscription
    menu1:any
    menu2:any
    menu3:any
    menu4:any
    menu5:any
    menu6:any
    length:any
  constructor(private act:ActivatedRoute,private voiture:VoitureService,private moto:MotoService,private acc:AccService,private camion:CamionService,private autre:AutreService,private location:LocationService){
    this.route=act.params.subscribe(data=>this.var=data["id"]);
    console.log(this.var);
    this.menu_voiture=voiture.getregion(this.var).subscribe((data)=>{
    this.menu1=data
    console.log(this.menu1)
    })
    this.menu_moto=moto.getregion(this.var).subscribe((data)=>{
      this.menu2=data
      console.log(this.menu2)
      })
      this.menu_camion=camion.getregion(this.var).subscribe((data)=>{
        this.menu3=data
        console.log(this.menu3)
        })
        this.menu_location=location.getregion(this.var).subscribe((data)=>{
          this.menu4=data
          console.log(this.menu4)
          })
          this.menu_acc=acc.getregion(this.var).subscribe((data)=>{
            this.menu5=data
            console.log(this.menu5)
            })
            this.menu_autre=autre.getregion(this.var).subscribe((data)=>{
              this.menu6=data
              console.log(this.menu6)
              })
  }
  ngOnDestroy(): void {
    this.route.unsubscribe();
    this.menu_acc.unsubscribe();
    this.menu_autre.unsubscribe();
    this.menu_location.unsubscribe();
    this.menu_moto.unsubscribe();
    this.menu_voiture.unsubscribe();
    this.menu_camion.unsubscribe();
  }
  }

