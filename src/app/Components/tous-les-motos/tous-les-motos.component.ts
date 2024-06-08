import { HttpClient } from '@angular/common/http';
import { Component,OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MotoService } from 'src/app/services/moto_service/moto.service';

@Component({
  selector: 'app-tous-les-motos',
  templateUrl: './tous-les-motos.component.html',
  styleUrls: ['./tous-les-motos.component.css']
})
export class TousLesMotosComponent implements OnDestroy{
  type="moto";
  datarray:any;
  length=0;
  tous_les_motos:Subscription;
  constructor(private moto:MotoService){
   this.tous_les_motos= moto.getall().subscribe((data) => {
      this.datarray = data;
      console.log(this.datarray);
      this.length=this.datarray.length;
       // Log inside the subscription callback
    });
  }
  ngOnDestroy(){
this.tous_les_motos.unsubscribe();
  }
}
