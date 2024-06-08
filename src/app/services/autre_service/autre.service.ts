import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutreService {

  constructor(private http:HttpClient) { }
  getall(){
    return  this.http.get('http://localhost:3000/autre/autres');
  }
  getmenu(id:any){
    return this.http.get(`http://localhost:3000/autre/menu/${id}`);
  }
  getregion(id:any){
    return this.http.get(`http://localhost:3000/autre/region/${id}`);
  }
  getautre(id:any){
    return this.http.get(`http://localhost:3000/autre/unique/${id}`)
  }
  postautre(autre:any){
    return this.http.post(`http://localhost:3000/autre/create`,autre);
  }
  total(email:any){
    return  this.http.get(`http://localhost:3000/autre/total/${email}`)
  }
  delete(id:any){
    return this.http.delete(`http://localhost:3000/autre/delete/${id}`);
  }
  update(id:any,object:any){
    return this.http.put(`http://localhost:3000/autre/put/${id}`,object)
      }
      search_autre(region:any,text:any){
        return this.http.get(`http://localhost:3000/autre/search/${region}/${text}`);
      }
      searchnav(text:any){
        return this.http.get(`http://localhost:3000/autre/search/${text}`);
      }
}
