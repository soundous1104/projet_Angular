import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Domaine } from '../domaine';

@Injectable({
  providedIn: 'root'
})
export class DomaineService {

  constructor(private http:HttpClient) { }
  getDomaine(){
    return this.http.get('http://127.0.0.1:8000/api/domaines')
  }

  insertDomaine(domaine:Domaine){
    return this.http.post('http://127.0.0.1:8000/api/domaines',domaine,{observe:'response'}) 
  }
  editDomaine(id){
    return this.http.get('http://127.0.0.1:8000/api/domaines/'+id+'/edit')
  }

  deleteDomaine(id){
    return this.http.delete('http://127.0.0.1:8000/api/domaines/'+id);
  }
  getDomaineById(id){
    return this.http.get('http://127.0.0.1:8000/api/domaines/'+id+'/edit')
  }
  updateDomaine(id,domaine:Domaine){
    return this.http.put('http://127.0.0.1:8000/api/domaines/'+id,domaine,{observe:'response'}) 
    
    
  }
}
