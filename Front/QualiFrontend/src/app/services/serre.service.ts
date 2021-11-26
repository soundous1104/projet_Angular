import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { serre } from '../serre-index/serre-index.component';
import {Serre } from '../serre-create/serre-create.component';
import { serre } from '../serre';

@Injectable({
  providedIn: 'root'
})
export class SerreService {

  constructor(private http: HttpClient) { }


  getSerre(){
     return this.http.get('http://127.0.0.1:8000/api/serres')
    
}
insertSerre(serre:Serre){
  return this.http.post('http://127.0.0.1:8000/api/serres',serre,{observe:'response'}) 
}
editSerre(id){
  return this.http.get('http://127.0.0.1:8000/api/serres/'+id+'/edit')
}

deleteSerre(id){
  return this.http.delete('http://127.0.0.1:8000/api/serres/'+id);
}
getSerreById(id){
  return this.http.get('http://127.0.0.1:8000/api/serres/'+id+'/edit')
}
updateSerre(id,serre:serre){
  return this.http.put('http://127.0.0.1:8000/api/serres/'+id,serre,{observe:'response'}) 
  
  
}
}
