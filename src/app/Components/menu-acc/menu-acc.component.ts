import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AccService } from 'src/app/services/acc_service/acc.service';

@Component({
  selector: 'app-menu-acc',
  templateUrl: './menu-acc.component.html',
  styleUrls: ['./menu-acc.component.css']
})
export class MenuAccComponent implements OnDestroy{
  menu:any;
  menu_acc:Subscription
  length:Number;
constructor(private acc:AccService){
  this.length=0;
this.menu_acc=acc.getmenu(8).subscribe((data)=>{
  this.menu=data;
  this.length=this.menu.length;
  console.log(this.menu);
})
}
  ngOnDestroy(): void {
this.menu_acc.unsubscribe();
  }
}
