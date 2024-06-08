import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {

  constructor(private http:HttpClient) { }
  create_Demande(object:any){
    return this.http.post(`http://localhost:3000/demande/poster`,object)
  }
  getdemandes(){
    return this.http.get(`http://localhost:3000/demande/demandes`);
  }
  getunique(id:any){
    return this.http.get(`http://localhost:3000/demande/unique/${id}`);
  }
  intouchable(){
    return this.http.get(`http://localhost:3000/demande/nontouch`);
  }
  valider(id:any,object:any){
    return this.http.put(`http://localhost:3000/demande/valider/${id}`,object)
  }
  refuser(id:any,object:any){
    return this.http.put(`http://localhost:3000/demande/valider/${id}`,object)
  }
}
