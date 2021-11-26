import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Variete } from '../variete';
//import { variete } from '../variete-create/variete-create.component';

@Injectable({
  providedIn: 'root'
})
export class VarieteService {

  constructor(private http: HttpClient) { }
  getVariete(){
    return this.http.get('http://127.0.0.1:8000/api/varietes')
   
}
insertVariete(variete:Variete){
  return this.http.post('http://127.0.0.1:8000/api/varietes',variete,{observe:'response'}) 
}
editVariete(id){
  return this.http.get('http://127.0.0.1:8000/api/varietes/'+id+'/edit')
}

deleteVariete(id){
  return this.http.delete('http://127.0.0.1:8000/api/varietes/'+id);
}
getVarieteById(id){
  return this.http.get('http://127.0.0.1:8000/api/varietes/'+id+'/edit')
}
updateVariete(id,variete:Variete){
  return this.http.put('http://127.0.0.1:8000/api/varietes/'+id,variete,{observe:'response'}) 
  
  
}
}


