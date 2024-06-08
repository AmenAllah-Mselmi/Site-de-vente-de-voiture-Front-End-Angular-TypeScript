import { HttpClient } from '@angular/common/http';
import { Component,OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AccService } from 'src/app/services/acc_service/acc.service';

@Component({
  selector: 'app-tous-les-acc',
  templateUrl: './tous-les-acc.component.html',
  styleUrls: ['./tous-les-acc.component.css']
})
export class TousLesAccComponent implements OnDestroy{
  type="acc";
  datarray:any;
  length=0;
  tous_les_acc:Subscription
  constructor(private acc:AccService){
    this.tous_les_acc=acc.getall().subscribe((data) => {
      this.datarray = data;
      console.log(this.datarray);
      this.length=this.datarray.length;
       // Log inside the subscription callback
    });
  }
  ngOnDestroy(){
    this.tous_les_acc.unsubscribe();
  }
}
