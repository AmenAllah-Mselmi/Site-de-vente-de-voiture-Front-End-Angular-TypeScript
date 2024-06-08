import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccService {

  constructor(private http:HttpClient) { }
  getall(){
    return this.http.get('http://localhost:3000/accesssoire/accessoires');
  }
  getmenu(id:any){
    return this.http.get(`http://localhost:3000/accesssoire/menu/${id}`);
  }
  getregion(id:any){
    return this.http.get(`http://localhost:3000/accesssoire/region/${id}`);
  }
  getacc(id:any){
    return this.http.get(`http://localhost:3000/accesssoire/unique/${id}`);
  }
  postacc(acc:any){
    return this.http.post(`http://localhost:3000/accesssoire/create`,acc);
  }
  total(email:any){
    return  this.http.get(`http://localhost:3000/accesssoire/total/${email}`)
  }
  delete(id:any){
    return this.http.delete(`http://localhost:3000/accesssoire/delete/${id}`);
  }
  update(id:any,object:any){
    return this.http.put(`http://localhost:3000/accesssoire/put/${id}`,object)
      }
      search_acc(region:any,text:any){
        return this.http.get(`http://localhost:3000/accesssoire/search/${region}/${text}`);
      }
      searchnav(text:any){
        return this.http.get(`http://localhost:3000/accesssoire/search/${text}`);
      }
}
