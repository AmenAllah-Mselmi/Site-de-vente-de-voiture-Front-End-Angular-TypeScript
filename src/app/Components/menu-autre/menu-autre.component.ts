import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AutreService } from 'src/app/services/autre_service/autre.service';

@Component({
  selector: 'app-menu-autre',
  templateUrl: './menu-autre.component.html',
  styleUrls: ['./menu-autre.component.css']
})
export class MenuAutreComponent implements OnDestroy {
  menu:any;
  menu_autre:Subscription
  length:Number;
constructor(private autre:AutreService){
  this.length=0;
this.menu_autre=autre.getmenu(8).subscribe((data)=>{
  this.menu=data;
  this.length=this.menu.length;
  console.log(this.menu);
})
}
  ngOnDestroy(): void {
this.menu_autre.unsubscribe();
  }
}
