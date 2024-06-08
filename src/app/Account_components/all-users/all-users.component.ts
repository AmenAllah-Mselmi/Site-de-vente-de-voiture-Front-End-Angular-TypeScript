import { Component, OnDestroy } from '@angular/core';
import { elementAt } from 'rxjs';
import { UserService } from 'src/app/services/user_service/user.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnDestroy{
  menu1:any=[]
  menusub:any
  deletesub:any
constructor(private user:UserService){
this.menusub=user.all_users().subscribe((data)=>{
  this.menu1=data
  console.log('tous les utilisateurs sont',this.menu1)
})
}
delete_user(id:any){
  this.menu1 = this.menu1.filter((item:any) => item._id !== id);
this.deletesub=this.user.deleteuser(id).subscribe((data)=>{
      console.log('deleted sucessfully');
})
}
ngOnDestroy(): void {
// if(this.menusub){
//   this.menusub.unsubscribe()
// }
// if(this.deletesub){
//   this.deletesub.unsubscribe()
// }
}
}
