import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CamionService } from 'src/app/services/camion_service/camion.service';

@Component({
  selector: 'app-menu-camion',
  templateUrl: './menu-camion.component.html',
  styleUrls: ['./menu-camion.component.css']
})
export class MenuCamionComponent implements OnDestroy {
  menu:any;
  menu_camion:Subscription
  length:Number;
constructor(private camion:CamionService){
  this.length=0;
this.menu_camion=camion.getmenu(8).subscribe((data)=>{
  this.menu=data;
  this.length=this.menu.length;
  console.log(this.menu);
})
}
  ngOnDestroy(): void {
this.menu_camion.unsubscribe();
  }
}
