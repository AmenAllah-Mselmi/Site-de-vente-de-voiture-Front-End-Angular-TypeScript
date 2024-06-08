import { HttpClient } from '@angular/common/http';
import { Component,OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LocationService } from 'src/app/services/location_service/location.service';

@Component({
  selector: 'app-tous-les-locations',
  templateUrl: './tous-les-locations.component.html',
  styleUrls: ['./tous-les-locations.component.css']
})
export class TousLesLocationsComponent implements OnDestroy{
  type="location";
  datarray:any;
  length=0;
  tous_les_locations:Subscription;
  constructor(private location:LocationService){
    this.tous_les_locations=location.getall().subscribe((data) => {
      this.datarray = data;
      console.log(this.datarray);
      this.length=this.datarray.length;
       // Log inside the subscription callback
    });
  }
  ngOnDestroy(){
this.tous_les_locations.unsubscribe();
  }
}
