import { Component, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AutreService } from 'src/app/services/autre_service/autre.service';

@Component({
  selector: 'app-edit-autre',
  templateUrl: './edit-autre.component.html',
  styleUrls: ['./edit-autre.component.css']
})
export class EditAutreComponent implements OnDestroy {
  autresub:any
  lien:String=''
liensub:any
email:String=''
object:any
email1:any=localStorage.getItem('email')
  constructor(private acc:AutreService,private route:Router,private act:ActivatedRoute ){
    this.liensub=act.params.subscribe((data)=>{
      this.lien=data['id'];
      this.email=data['email'];
      console.log("email=",this.email)
      console.log("lien= ",this.lien)
      this.liensub=this.acc.getautre(this.lien).subscribe((data)=>{
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





