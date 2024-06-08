import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LocationService } from 'src/app/services/location_service/location.service';

@Component({
  selector: 'app-menu-location',
  templateUrl: './menu-location.component.html',
  styleUrls: ['./menu-location.component.css']
})
export class MenuLocationComponent implements OnDestroy {
  menu:any;
  menu_location:Subscription
  length:Number;
constructor(private location:LocationService){
  this.length=0;
this.menu_location=location.getmenu(8).subscribe((data)=>{
  this.menu=data;
  this.length=this.menu.length;
  console.log(this.menu);
})
}
  ngOnDestroy(): void {
this.menu_location.unsubscribe();
  }
}
