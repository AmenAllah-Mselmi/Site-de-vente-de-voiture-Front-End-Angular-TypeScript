import { HttpClient } from '@angular/common/http';
import { Component,OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { VoitureService } from 'src/app/services/voiture_service/voiture.service';
@Component({
  selector: 'app-tous-les-voitures',
  templateUrl: './tous-les-voitures.component.html',
  styleUrls: ['./tous-les-voitures.component.css']
})
export class TousLesVoituresComponent implements OnDestroy {
  type1="voiture";
  datarray: any;
  tous_les_voitures:Subscription;
  constructor(private voiture:VoitureService) {
  this.tous_les_voitures= this.voiture.getall() .subscribe((data) => {
      this.datarray = data;
      console.log(this.datarray); // Log inside the subscription callback
    });
  }
  ngOnDestroy(){
    this.tous_les_voitures.unsubscribe();
  }
}
