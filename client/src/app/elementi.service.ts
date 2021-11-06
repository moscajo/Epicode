import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iprodotti } from './interfaces/iprodotti';

@Injectable({
  providedIn: 'root'
})
export class ElementiService {
 private urlAPI = "http://localhost:3000/prod/"
  
 
 constructor( private http: HttpClient) { }
 getAllProd() {
  return this.http.get<Iprodotti[]>(this.urlAPI);
}
 getProds(id: string){
   return this.http.get<Iprodotti>(this.urlAPI+id)
 }
removeProd(item: Iprodotti) {
  return this.http.delete(this.urlAPI+item.id)
}

createProds(item: Iprodotti){
  return this.http.post(this.urlAPI, item);
}
updateProds(item: Iprodotti){
  return this.http.put(this.urlAPI+item.id, item)
}
}
