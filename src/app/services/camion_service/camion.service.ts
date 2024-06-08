import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CamionService {

  constructor(private http:HttpClient) { }
  getall(){
    return this.http.get('http://localhost:3000/camion/camions');
  }
  getmenu(id:any){
    return this.http.get(`http://localhost:3000/camion/menu/${id}`);
  }
  getregion(id:any){
    return this.http.get(`http://localhost:3000/camion/region/${id}`);
  }
  getcamion(id:any){
    return this.http.get(`http://localhost:3000/camion/unique/${id}`);
  }
  postcamion(camion:any){
    return this.http.post(`http://localhost:3000/camion/create`,camion);
  }
  total(email:any){
    return  this.http.get(`http://localhost:3000/camion/total/${email}`)
  }
  delete(id:any){
    return this.http.delete(`http://localhost:3000/camion/delete/${id}`);
  }
  update(id:any,object:any){
    return this.http.put(`http://localhost:3000/camion/put/${id}`,object)
      }
      search_camion(region:any,text:any){
        return this.http.get(`http://localhost:3000/camion/search/${region}/${text}`);
      }
      searchnav(text:any){
        return this.http.get(`http://localhost:3000/camion/search/${text}`);
      }
}
