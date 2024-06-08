import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http:HttpClient) { }
  getall(){
    return this.http.get('http://localhost:3000/location/locations');
  }
  getmenu(id:any){
    return this.http.get(`http://localhost:3000/location/menu/${id}`);
  }
  getregion(id:any){
    return this.http.get(`http://localhost:3000/location/region/${id}`);
  }
  getlocation(id:any){
    return this.http.get(`http://localhost:3000/location/unique/${id}`);
  }
  postlocation(location:any){
    return this.http.post(`http://localhost:3000/location/create`,location);
  }
  total(email:any){
    return  this.http.get(`http://localhost:3000/location/total/${email}`)
  }
  delete(id:any){
    return this.http.delete(`http://localhost:3000/location/delete/${id}`);
  }
  update(id:any,object:any){
    return this.http.put(`http://localhost:3000/location/put/${id}`,object)
      }
      search_location(region:any,text:any){
        return this.http.get(`http://localhost:3000/location/search/${region}/${text}`);
      }
      searchnav(text:any){
        return this.http.get(`http://localhost:3000/location/search/${text}`);
      }
}
