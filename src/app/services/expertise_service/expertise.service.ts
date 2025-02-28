import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExpertiseService {

  constructor(private http:HttpClient) { }
  get_expertise(id:any){
    return this.http.get(`http://localhost:3000/expertise/expertises/${id}`);
  }
  post_expertise(object:any){
    return this.http.post(`http://localhost:3000/expertise/poster`,object);
  }
}
