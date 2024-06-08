import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MotoService {

  constructor(private http:HttpClient) { }
  getall(){
    return this.http.get('http://localhost:3000/moto/motos');
  }
  getmenu(id:any){
    return this.http.get(`http://localhost:3000/moto/menu/${id}`);
  }
  getregion(id:any){
    return this.http.get(`http://localhost:3000/moto/region/${id}`);
  }
  getmoto(id:any){
    return this.http.get(`http://localhost:3000/moto/unique/${id}`);
  }
  postmoto(moto:any){
    return this.http.post(`http://localhost:3000/moto/create`,moto);
  }
  total(email:any){
    return  this.http.get(`http://localhost:3000/moto/total/${email}`)
  }
  delete(id:any){
    return this.http.delete(`http://localhost:3000/moto/delete/${id}`);
  }
  update(id:any,object:any){
    return this.http.put(`http://localhost:3000/moto/put/${id}`,object)
      }
      search_moto(region:any,text:any){
        return this.http.get(`http://localhost:3000/moto/search/${region}/${text}`);
      }
      searchnav(text:any){
        return this.http.get(`http://localhost:3000/moto/search/${text}`);
      }
}
