import { Component, OnDestroy } from '@angular/core';
import { ExpertiseService } from 'src/app/services/expertise_service/expertise.service';

@Component({
  selector: 'app-demande-expertise',
  templateUrl: './demande-expertise.component.html',
  styleUrls: ['./demande-expertise.component.css']
})
export class DemandeExpertiseComponent implements OnDestroy{
  menu:any=[]
  menusub:any
  email:any
constructor(private expertise:ExpertiseService){
  this.menusub=expertise.get_expertise(localStorage.getItem('id')).subscribe((data)=>{
  this.menu=data
  console.log(this.menu);
})
}
sendEmail(email: string) {
  window.location.href = `mailto:${email}`;
}
ngOnDestroy(): void {
    if(this.menusub){
      this.menusub.unsubscribe()
    }
}
}
