import { HttpClient } from '@angular/common/http';
import { Component,OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AutreService } from 'src/app/services/autre_service/autre.service';

@Component({
  selector: 'app-tous-les-autres',
  templateUrl: './tous-les-autres.component.html',
  styleUrls: ['./tous-les-autres.component.css']
})
export class TousLesAutresComponent implements OnDestroy{
  type="autre";
  datarray:any;
  length=0;
  tous_les_autres:Subscription;
  constructor(private autre:AutreService){
   this.tous_les_autres=autre.getall().subscribe((data) => {
      this.datarray = data;
      console.log(this.datarray);
      this.length=this.datarray.length;
       // Log inside the subscription callback
    });
  }
  ngOnDestroy(){
    this.tous_les_autres.unsubscribe();
        }
}
