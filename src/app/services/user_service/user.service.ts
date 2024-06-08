import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
IsLoginIn:boolean
  constructor(private http:HttpClient) {
    this.IsLoginIn=false
  }
  getuser(id:any){
    return this.http.get(`http://localhost:3000/user/unique/${id}`)
  }
  createuser(user:any){
    return this.http.post(`http://localhost:3000/user/signup`,user);
  }
  sendToken(user:any){
    return this.http.post(`http://localhost:3000/user/login`,user)
  }
  all_users(){
    return this.http.get(`http://localhost:3000/user/users`);
}
  deleteuser(id:any){
return this.http.delete(`http://localhost:3000/user/delete/${id}`);
}
getExperts(){
  return this.http.get(`http://localhost:3000/user/experts`);
}
updaterole(id:any,object:any){
  return this.http.put(`http://localhost:3000/user/updateRole/${id}`,object);
}
}
