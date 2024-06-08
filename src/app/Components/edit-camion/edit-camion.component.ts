import { Component, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AutreService } from 'src/app/services/autre_service/autre.service';
import { CamionService } from 'src/app/services/camion_service/camion.service';

@Component({
  selector: 'app-edit-camion',
  templateUrl: './edit-camion.component.html',
  styleUrls: ['./edit-camion.component.css']
})
export class EditCamionComponent implements OnDestroy {
  autresub:any
  lien:String=''
liensub:any
email:String=''
object:any
email1:any=localStorage.getItem('email')
  constructor(private acc:CamionService,private route:Router,private act:ActivatedRoute ){
    this.liensub=act.params.subscribe((data)=>{
      this.lien=data['id'];
      this.email=data['email'];
      console.log("email=",this.email)
      console.log("lien= ",this.lien)
      this.liensub=this.acc.getcamion(this.lien).subscribe((data)=>{
        this.object=data
        console.log(this.object)
      })
      })
    }
  submit(f: NgForm) {
    this.autresub = this.acc.update(this.lien,f.value).subscribe(
      (response) => {
        console.log('Post successful', response);
      },
      (error) => {
        console.error('Error while posting', error);
        // Handle error here, e.g., show error message to the user
      }
    );
    console.log(f);
    console.log(f.value);
    this.route.navigate([`/account/dashboard/${this.email1}`]);
  }

  ngOnDestroy(): void {
    if (this.autresub) {
      this.autresub.unsubscribe(); // Check if camionsub is defined before unsubscribing
    }
  }
  }


