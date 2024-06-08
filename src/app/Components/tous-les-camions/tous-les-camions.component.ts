import { HttpClient } from '@angular/common/http';
import { Component, Input,OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CamionService } from 'src/app/services/camion_service/camion.service';

@Component({
  selector: 'app-tous-les-camions',
  templateUrl: './tous-les-camions.component.html',
  styleUrls: ['./tous-les-camions.component.css']
})
export class TousLesCamionsComponent implements OnDestroy{
type="camion";
datarray:any;
length=0;
tous_les_camions:Subscription;
constructor(private camion:CamionService){
  this.tous_les_camions=camion.getall().subscribe((data) => {
    this.datarray = data;
    console.log(this.datarray);
    this.length=this.datarray.length;
     // Log inside the subscription callback
  });
}
ngOnDestroy(){
this.tous_les_camions.unsubscribe();
}
}
