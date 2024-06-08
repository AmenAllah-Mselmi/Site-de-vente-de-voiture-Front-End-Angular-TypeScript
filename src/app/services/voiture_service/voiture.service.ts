import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class VoitureService {

  constructor(private http:HttpClient) { }
  getall(){
    return this.http.get('http://localhost:3000/voiture/voitures');
  }
  getmenu(id:any){
    return this.http.get(`http://localhost:3000/voiture/menu/${id}`);
  }
  getmarque(id:any){
    return this.http.get(`http://localhost:3000/voiture/marque/${id}`);
  }
  getregion(id:any){
    return this.http.get(`http://localhost:3000/voiture/region/${id}`);
  }
  getvoiture(id:any){
    return this.http.get(`http://localhost:3000/voiture/unique/${id}`)
  }
  postcar(voiture:any){
    return this.http.post(`http://localhost:3000/voiture/create`,voiture);
  }
  total(email:any){
    return  this.http.get(`http://localhost:3000/voiture/total/${email}`)
  }
  delete(id:any){
    return this.http.delete(`http://localhost:3000/voiture/delete/${id}`);
  }
  update(id:any,object:any){
return this.http.put(`http://localhost:3000/voiture/put/${id}`,object)
  }
  search_voiture(region:any,text:any){
    return this.http.get(`http://localhost:3000/voiture/search/${region}/${text}`);
  }
  searchnav(text:any){
    return this.http.get(`http://localhost:3000/voiture/search/${text}`);
  }
}
