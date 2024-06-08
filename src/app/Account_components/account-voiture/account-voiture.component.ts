import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AccService } from 'src/app/services/acc_service/acc.service';
import { AutreService } from 'src/app/services/autre_service/autre.service';
import { CamionService } from 'src/app/services/camion_service/camion.service';
import { LocationService } from 'src/app/services/location_service/location.service';
import { MotoService } from 'src/app/services/moto_service/moto.service';
import { UserService } from 'src/app/services/user_service/user.service';
import { VoitureService } from 'src/app/services/voiture_service/voiture.service';

@Component({
  selector: 'app-account-voiture',
  templateUrl: './account-voiture.component.html',
  styleUrls: ['./account-voiture.component.css']
})
export class AccountVoitureComponent implements OnDestroy {
  var:any;
  route:Subscription
  menu_voiture:Subscription
  menu_moto:Subscription
  menu_camion:Subscription
  menu_autre:Subscription
  menu_location:Subscription
  menu_acc:Subscription
  menu1:any
  menu2:any
  menu3:any
  menu4:any
  menu5:any
  menu6:any
  length:any
  step:number
  usersub:Subscription
  user1:any
  delcar:any
  delmoto:any
  delcamion:any
  dellocation:any
  delacc:any
  delautre:any
  constructor(private act:ActivatedRoute,private voiture:VoitureService,private moto:MotoService,private acc:AccService,private camion:CamionService,private autre:AutreService,private location:LocationService,private user:UserService){
    this.step=1
    this.route=act.params.subscribe(data=>this.var=data["email"]);
    console.log(this.var);
    this.menu_voiture=voiture.total(this.var).subscribe((data)=>{
    this.menu1=data
    console.log(this.menu1)
    })
    this.menu_moto=moto.total(this.var).subscribe((data)=>{
      this.menu2=data
      console.log(this.menu2)
      })
      this.menu_camion=camion.total(this.var).subscribe((data)=>{
        this.menu3=data
        console.log(this.menu3)
        })
        this.menu_location=location.total(this.var).subscribe((data)=>{
          this.menu4=data
          console.log(this.menu4)
          })
          this.menu_acc=acc.total(this.var).subscribe((data)=>{
            this.menu5=data
            console.log(this.menu5)
            })
            this.menu_autre=autre.total(this.var).subscribe((data)=>{
              this.menu6=data
              console.log(this.menu6)
              })
              this.usersub=user.getuser(this.var).subscribe((data)=>{
                this.user1=data
                console.log(this.user1)
              })
  }
  voiture1(){
    this.step=1
  }
  moto1(){
    this.step=2
  }
  camion1(){
    this.step=3
  }
  location1(){
    this.step=4
  }
  acc1(){
    this.step=5
  }
  autre1(){
    this.step=6
  }
  deletecar(id:any){
this.delcar=this.voiture.delete(id).subscribe((data)=>{
  this.menu1 = this.menu1.filter((item:any) => item._id !== id);
  console.log('deleted sucessfully');
})
  }
  deletemoto(id:any){
    this.delmoto=this.moto.delete(id).subscribe((data)=>{
      this.menu2 = this.menu2.filter((item:any) => item._id !== id);
      console.log('deleted sucessfully');
    })
  }
  deletecamion(id:any){
    this.delcamion=this.camion.delete(id).subscribe((data)=>{
      this.menu3 = this.menu3.filter((item:any) => item._id !== id);
      console.log('deleted sucessfully');
    })
  }
  deletelocation(id:any){
    this.dellocation=this.location.delete(id).subscribe((data)=>{
      this.menu4 = this.menu4.filter((item:any) => item._id !== id);
      console.log('deleted sucessfully');
    })
  }
  deleteacc(id:any){
    this.delacc=this.acc.delete(id).subscribe((data)=>{
      this.menu5 = this.menu5.filter((item:any) => item._id !== id);
      console.log('deleted sucessfully');
    })
  }
  deleteautre(id:any){
    this.delautre=this.autre.delete(id).subscribe((data)=>{
      this.menu6 = this.menu6.filter((item:any) => item._id !== id);
      console.log('deleted sucessfully');
    })
  }
  ngOnDestroy(): void {
    this.route?.unsubscribe();
    this.menu_acc?.unsubscribe();
    this.menu_autre?.unsubscribe();
    this.menu_location?.unsubscribe();
    this.menu_moto?.unsubscribe();
    this.menu_voiture?.unsubscribe();
    this.menu_camion?.unsubscribe();
    this.usersub?.unsubscribe();
    this.delcar?.unsubscribe();
    this.delmoto?.unsubscribe();
    this.delcamion?.unsubscribe();
    this.dellocation?.unsubscribe();
    this.delacc?.unsubscribe();
    this.delautre?.unsubscribe();
}
}
