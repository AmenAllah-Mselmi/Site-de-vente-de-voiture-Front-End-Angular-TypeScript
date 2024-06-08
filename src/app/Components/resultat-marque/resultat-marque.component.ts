import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { VoitureService } from 'src/app/services/voiture_service/voiture.service';

@Component({
  selector: 'app-resultat-marque',
  templateUrl: './resultat-marque.component.html',
  styleUrls: ['./resultat-marque.component.css']
})
export class ResultatMarqueComponent implements OnDestroy {
  var:any;
  route:Subscription
  menu_voiture:Subscription
  menu:any
  length:any
constructor(private act:ActivatedRoute,private voiture:VoitureService){
  this.route=act.params.subscribe(data=>this.var=data["id"]);
  console.log(this.var);
  this.menu_voiture=voiture.getmarque(this.var).subscribe((data)=>{
  this.menu=data
  console.log(this.menu)
  this.length=this.menu.length
  })
}
ngOnDestroy(): void {
  this.route.unsubscribe();
}
}
