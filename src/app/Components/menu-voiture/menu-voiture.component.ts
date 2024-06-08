import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { VoitureService } from 'src/app/services/voiture_service/voiture.service';

@Component({
  selector: 'app-menu-voiture',
  templateUrl: './menu-voiture.component.html',
  styleUrls: ['./menu-voiture.component.css']
})
export class MenuVoitureComponent implements OnDestroy {
  menu:any;
  menu_voiture:Subscription
  length:Number;
constructor(private voiture:VoitureService){
  this.length=0;
this.menu_voiture=voiture.getmenu(8).subscribe((data)=>{
  this.menu=data;
  this.length=this.menu.length;
  console.log(this.menu);
})
}
  ngOnDestroy(): void {
this.menu_voiture.unsubscribe();
  }
}
