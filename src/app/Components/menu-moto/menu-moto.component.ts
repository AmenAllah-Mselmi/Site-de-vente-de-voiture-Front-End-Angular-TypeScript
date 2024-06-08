import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MotoService } from 'src/app/services/moto_service/moto.service';

@Component({
  selector: 'app-menu-moto',
  templateUrl: './menu-moto.component.html',
  styleUrls: ['./menu-moto.component.css']
})
export class MenuMotoComponent implements OnDestroy {
  menu:any;
  menu_moto:Subscription
  length:any
constructor(private moto:MotoService){
this.menu_moto=moto.getmenu(8).subscribe((data)=>{
this.menu=data
this.length=this.menu.length
console.log(this.menu);
})
}
  ngOnDestroy(): void {
this.menu_moto.unsubscribe()
  }
}
